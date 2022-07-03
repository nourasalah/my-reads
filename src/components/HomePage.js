    import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import Shelf from './Shelf';

    const HomePage = (books, changeShelf) => {
    return (
    <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>

                <Shelf section='Currently Reading' books={books} category='currently reading' changeShelf={changeShelf}/>
                <Shelf section="Want To Read" books={books} category='want to read' changeShelf={changeShelf}/>
                <Shelf section='Read' books={books} category='read' changeShelf={changeShelf}/>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search' className='open-search' >Add a book</Link>
            </div>
            </div>  )
    }

    export default HomePage