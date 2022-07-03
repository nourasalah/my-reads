import React  from 'react'
import { useEffect , useState} from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI'
const App = () => {
const [books, setBooks] = useState([]);
const [booksFromSearch, setBooksFromSearch] = useState([]);
const [search, setsearch] = useState('')

useEffect(() => {

  BooksAPI.getAll()
    .then(data => {
      setBooks(data)
    }
    );
}, [])
const changeShelf = async (book, shelf)=>{
  await BooksAPI.update(book, shelf);
  await BooksAPI.getAll()
  .then(data => {
    setBooks(data)
  }
  );
}
const handleSearch =async (event)=>{
  await setsearch(event.target.value);
  handleBooksSearch(handleSearch())
}
const handleBooksSearch = async (search)=>{
 BooksAPI.search(search).then((res)=>{
setBooksFromSearch(res)
 })
}
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' books={books} element={<HomePage/>} changeShelf={changeShelf}/>
          <Route path='/search' element={<SearchPage/>} changeShelf={changeShelf} handleSearch={handleSearch} search={search} booksFromSearch={booksFromSearch}/>
          </Routes>        
      </div>
    </Router>
  )
}

export default App