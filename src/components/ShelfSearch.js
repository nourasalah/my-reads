import React from 'react'
import Book from './Book'

const ShelfSearch = (booksFromSearch,changeShelf) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title"> </h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
        <li>
            {booksFromSearch.map((book)=>( <Book book={book}  changeShelf={changeShelf}/>))}
        </li>

    </ol>
    </div>
</div>
  )
}

export default ShelfSearch