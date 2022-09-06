import React  from "react";
import axios from "axios";

export default function BooKlist() {

    const getBooks = () => {
        axios .get ('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/booksll')
        .then(Response => console.log (Response))
        .catch(error => console.log (error))

    }

    
    getBooks();
    return(
        
        <div>BookList</div>

    )

    }