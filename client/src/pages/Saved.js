import React, { Component } from 'react';
import Hero from "../components/Hero";
import { Card, CardImg, RemoveFavoriteBtn } from "../components/Favorites";
import { Row, Column } from "../components/Bootstrap";
import API from "../utils/API";
import '../App.css';


class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    removeBook = (e, book) => {

        e.preventDefault();
        console.log(book);
        const id = book._id;

        API.deleteBook(id)
            .then(res => {
                console.log("Removed successfully");
                this.loadBooks()
            })
            .catch(err => console.log(err));

        // console.log("here");
        // this.setState({ state: this.state });
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
                console.log(res);
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Hero title="My Favorites" subtitle="" />
                {this.state.books.length ? (
                    <div>
                        {this.state.books.map(book => (
                            <Row addclass="displayCard" size="10" offsetSize="1">
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
                        <h3 className="noBooks">No Favorites to Display</h3>
                    </div>}
            </div>
        );
    }
}

export default Saved;