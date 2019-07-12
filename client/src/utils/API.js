import axios from 'axios';

export default {
    getBooks: () => {
        return axios.get('/api/books')
    },
    searchBooks: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    getBookById: (id) => {
        return axios.get(`/api/books/${id}`)
    },
    saveBook: (savedBook) => {
        return axios.post(`/api/books/${savedBook}`)
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`)
    }
};