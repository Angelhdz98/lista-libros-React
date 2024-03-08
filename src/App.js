import { useState, useEffect, useContext} from "react";
import axios from 'axios'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/book";

function App(){
    const {fetchBooks} = useContext(BooksContext)
    useEffect(() => {
        fetchBooks();
    }, []);

    
    return <div className="app">
        <h1>Reading List</h1>
        <BookList/>
        <BookCreate />
    </div>
}

export default App;


