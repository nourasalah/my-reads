    import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import ShelfSearch from './ShelfSearch'

    const SearchPage = ({handleSearch, search, booksFromSearch, changeShelf}) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
            
                <Link to='/' className='close-search' >Close</Link>
                <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN" onChange={handleSearch()}
                />
                </div>
            </div>
            <ShelfSearch booksFromSearch={booksFromSearch}  changeShelf={changeShelf}/>
            </div>
    )
    }

    export default SearchPage