import React from 'react'
import Book from './Book'

class WantToRead extends React.Component {
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          { this.props.books.map((book) => {
            return(<li key= {book.id}>
              <Book book= {book} shelfUpdate= {this.props.shelfUpdate}/>
            </li>
            )})}
        </ol>
      </div>
    )}
}

export default WantToRead