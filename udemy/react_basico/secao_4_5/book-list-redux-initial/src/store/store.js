import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice.js';
import notesReducer from './noteSlice.js';

export default configureStore({
    reducer: {
        books: booksReducer,
        notes: notesReducer
    }
})