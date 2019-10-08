import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import Library from './Library'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books : []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {this.setState(() => ({ 
      books : books
    }))
    })
  }

  shelfUpdate(book, shelf) {
    BooksAPI.update(book, shelf)
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.books[book.id].shelf = shelf
  } 

  render() {
    return ( 
      <div className="app">
        <Route exact path='/' render = {() => (
          <Library books = {this.state.books}
          shelfUpdate= {this.shelfUpdate}/>
        )}/>
        <Route path='/SearchPage' render = {() => (
          <SearchPage shelfUpdate= {this.shelfUpdate}/>
        )}/>
      </div> 
    )
  }
}

export default BooksApp
