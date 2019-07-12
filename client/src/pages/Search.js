import React, { Component } from 'react';
import Hero from "../components/Hero";
import { Card, LearnBtn, FavoriteBtn, CardImg } from "../components/Card";
import { SearchBar, SearchBtn } from "../components/SearchBar";
import { Row, Column } from "../components/Bootstrap";
import API from "../utils/API";
import '../App.css';

class Search extends Component {
    state = {
        title: 'Blink',
        books: []
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
                console.log(this.state.books)
            }).catch(err => console.log(err))
    }

    saveBook = (e, book) => {
        e.preventDefault();
        console.log(book);
        book = book.volumeInfo;
        API.saveBook({
            title: book.title,
            author: book.authors,
            description: book.description,
            image: book.imageLinks.thumbnail,
            url: book.infoLink
        }).then(res => this.loadBooks())
            .catch(err => console.log(err));
    }


    learnMore = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Hero title="Google Bookstore" subtitle="Search for and Save Books of Interest" />
                <form className="col-10 offset-1" onSubmit={(e) => this.handleSearch(e)}>
                    <SearchBar
                        onChange={this.handleInputChange}
                        name="title"
                        type="text"
                    />
                    <SearchBtn type="submit" />
                </form>
                {this.state.books.length ? (
                    <div>
                        {this.state.books.map(book => (
                            <Row addclass="displayCard" size="10" offsetSize="1" key={book.volumeInfo.id}>
                                <Column size="8" key={book.volumeInfo.id}>
                                    <Card key={book.volumeInfo.id} bookInfo={book.volumeInfo} />
                                    <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><LearnBtn addclass="cardBtn" /></a>
                                    <FavoriteBtn addclass="cardBtn" onClick={(e) => this.saveBook(e, book)} />
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


