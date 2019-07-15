import React, { Component } from 'react';
import Hero from "../components/Hero";
import { Card, LearnBtn, FavoriteBtn, CardImg } from "../components/Card";
import { SearchBar, SearchBtn } from "../components/SearchBar";
import { Row, Column } from "../components/Bootstrap";
import { EmailModal, ConfirmModal } from "../components/Modal";
import API from "../utils/API";
import '../App.css';

class Search extends Component {
    state = {
        title: 'Harry Potter',
        books: [],
        bookToSave: {},
        emailModal: false,
        confirmModal: false,
        modalText: "",
        email: '',
    };

    componentDidMount() {
        this.displayBooks();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = (e) => {
        e.preventDefault();
        if (this.state.title) this.displayBooks();
    }

    displayBooks = () => {
        API.searchBooks(this.state.title)
            .then(res => {
                this.setState({ books: res.data.items });
            }).catch(err => console.log(err))
    }

    handleFaveBtnClick = (e, book) => {
        e.preventDefault();
        book = book.volumeInfo;
        this.setState({
            bookToSave: {
                title: book.title,
                author: book.authors,
                description: book.description,
                image: book.imageLinks.thumbnail,
                url: book.infoLink,
                email: ''
            }
        });

        this.openEmailModal();
    }

    learnMore = (e) => {
        e.preventDefault();
    }

    openEmailModal = () => {
        this.setState({ emailModal: true, modalText: `Enter your email address to add to your favorites` });
    }

    openConfirmModal = () => {
        let email = this.state.email.replace(/[^a-zA-Z0-9]/g, '')
        this.setState(prevState => ({
            bookToSave: {
                ...prevState.bookToSave,
                email: email
            }
        }))
        this.setState({ confirmModal: true, emailModal: false, modalText: `Your Favorite has been Saved!` });
    }


    closeModal = () => {
        this.setState({ confirmModal: false, modalText: ``, email: false });
        this.saveBook();
    }

    saveBook = () => {
        let book = this.state.bookToSave;
        API.saveBook({
            title: book.title,
            author: book.author,
            description: book.description,
            image: book.image,
            url: book.url,
            email: book.email
        })
            .then(res => {
                console.log("book saved!")
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Hero title="Google Bookstore" subtitle="Search for and Save Books of Interest" />
                <form className="col-10 offset-1" onSubmit={(e) => this.handleSearch(e)}>
                    <SearchBar
                        label="Search for your favorite books"
                        onChange={this.handleInputChange}
                        name="title"
                        type="text"
                        placeholder='i.e. "Harry Potter"'
                    />
                    <SearchBtn type="submit" />
                </form>
                {this.state.books.length ? (
                    <div>
                        {this.state.books.map((book, index) => (
                            <Row addclass="displayCard" size="10" key={index} offsetSize="1">
                                <Column size="8" key={book.volumeInfo.id}>
                                    <Card key={book.volumeInfo.id} bookInfo={book.volumeInfo} />
                                    <a key={book.volumeInfo.id} href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><LearnBtn addclass="cardBtn" /></a>
                                    <FavoriteBtn key={book.volumeInfo.id} addclass="cardBtn" onClick={(e) => this.handleFaveBtnClick(e, book)} />
                                    <EmailModal key={book.volumeInfo.id} handleInputChange={this.handleInputChange} isOpen={this.state.emailModal} modalText={this.state.modalText} openConfirmModal={this.openConfirmModal} />
                                    <ConfirmModal key={book.volumeInfo.id} isOpen={this.state.confirmModal} modalText={this.state.modalText} closeModal={this.closeModal} />
                                </Column>
                                <Column size="2" key={book.volumeInfo.id}>
                                    <CardImg key={book.volumeInfo.id} bookInfo={book.volumeInfo} />
                                </Column>
                            </Row>
                        ))}
                    </div>

                ) : <div className="col-10 offset-1" >
                        <h3 className="noBooks">No Books to Display</h3>
                    </div>}
            </div>
        );
    }
}

export default Search;


