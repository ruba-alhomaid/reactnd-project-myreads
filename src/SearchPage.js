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
        if ( query === '' || (!query) ) {
            this.setState({
              books: []
            })}
        else { 
            BooksAPI.search(query) 
            .then(books => {
                console.log(books)
                books.map(book => {
                    book.shelf = 'none'
                    this.props.booksOnShelfs.map(b => { 
                        book.id === b.id && ( book.shelf = b.shelf )
                        return b
                    })
                    return books
                })
                this.setState({ books: books })
            })
            .catch(err => {
                console.log(err)
                this.setState({ books: [] })
            })}
        }
    //     .then((newBooks) => {
    //         if (newBooks)
    //         this.setState(() => ({ 
    //             books : newBooks
    //           }))
    //     })
    // } 

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