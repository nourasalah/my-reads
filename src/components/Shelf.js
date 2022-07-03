import React from 'react'
import Book from './Book'

const Shelf = ({section, books, category, changeShelf}) => {
    const booksCategory= books.filter((book)=> book.shelf === category)
    console.log(books);
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title"> {section}</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
        <li>
            {booksCategory.map((book)=>( <Book book={book} changeShelf={changeShelf}/>))}
        </li>

    </ol>
    </div>
</div>
  )
}

export default Shelf