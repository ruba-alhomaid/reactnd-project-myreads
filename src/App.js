import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import Library from './Library'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
    this.shelfUpdate = this.shelfUpdate.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  shelfUpdate(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }
      ))
    })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library books={this.state.books}
            shelfUpdate={this.shelfUpdate} />
        )} />
        <Route path='/SearchPage' render={() => (
          <SearchPage booksOnShelfs={this.state.books}
            shelfUpdate={this.shelfUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
