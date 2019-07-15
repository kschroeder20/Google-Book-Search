import React, { Component } from 'react';
import Hero from "../components/Hero";
import { Card, CardImg, RemoveFavoriteBtn } from "../components/Favorites";
import { Row, Column } from "../components/Bootstrap";
import { SearchBar, SearchBtn } from "../components/SearchBar";
import API from "../utils/API";
import '../App.css';


class Saved extends Component {
    state = {
        books: [],
        email: ""
    };

    componentDidMount() {
        //this.loadBooks();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.loadBooks();
    }

    removeBook = (e, book) => {
        e.preventDefault();
        const id = book._id;

        API.deleteBook(id)
            .then(res => {
                console.log("Removed successfully");
                this.loadBooks();
            })
            .catch(err => console.log(err));
    }

    loadBooks = () => {
        API.getBookByEmail(this.state.email)
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Hero title="My Favorites" subtitle="" />
                <form className="col-10 offset-1" onSubmit={(e) => this.handleSearch(e)}>
                    <SearchBar
                        label="Search your email to see your favorites"
                        onChange={this.handleInputChange}
                        name="email"
                        type="email"
                        placholder="Enter your email"
                    />
                    <SearchBtn type="submit" />
                </form>
                {this.state.books.length ? (
                    <div>
                        {this.state.books.map(book => (
                            <Row addclass="displayCard" size="10" key={book._id} offsetSize="1">
                                <Column size="8">
                                    <Card key={book._id} bookInfo={book} />
                                    <RemoveFavoriteBtn addclass="cardBtn" onClick={(e) => this.removeBook(e, book)} />
                                </Column>
                                <Column size="2">
                                    <CardImg bookInfo={book} />
                                </Column>
                            </Row>
                        ))}
                    </div>

                ) : <div className="col-10 offset-1" >
                        <h5 className="noBooks">No favorites to display</h5>
                    </div>}
            </div>
        );
    }
}

export default Saved;