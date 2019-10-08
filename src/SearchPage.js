import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends React.Component {
    state = {
        query : '',
        books : []
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query : query.trim()
        }))
        BooksAPI.search(query) 
        .then((newBooks) => {
            if (newBooks)
            this.setState(() => ({ 
                books : newBooks
              }))
        })
    } 

    render() { 
        const { query } = this.state
        const { books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                         type="text" 
                         placeholder="Search by title or author"
                         value={query}
                         onChange={(event) => this.updateQuery(event.target.value)} 
                         />
                    </div>
                </div> 
                <div className="search-books-results">
                    <ol className="books-grid">
                        { books.map((book) => {
                            return (<li key={book.id} className='book-list-item'>
                                <Book book= {book} shelfUpdate= {this.props.shelfUpdate}/>
                            </li>)
                        }) }
                    </ol>
                </div>
            </div>
        )
    }
}


export default SearchPage