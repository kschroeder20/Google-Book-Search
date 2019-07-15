import axios from 'axios';

export default {
    getBooks: () => {
        return axios.get('/api/books')
    },
    searchBooks: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    getBookByEmail: (email) => {
        email = email.replace(/[^a-zA-Z0-9]/g, '');
        return axios.get(`/api/books/${email}`)
    },
    // Saves a book to the database
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`)
    }
};