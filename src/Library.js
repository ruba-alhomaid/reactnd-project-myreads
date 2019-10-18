import React from 'react'
import { Link } from 'react-router-dom'
import CurrentlyRead from './CurrentlyRead'
import WantToRead from './WantToRead'
import Read from './Read'

class Library extends React.Component {
    
    render() {
      return(
        <div className="list-books"> 
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <CurrentlyRead books = {this.props.books.filter(b => b.shelf === 'currentlyReading')}
                    shelfUpdate= {this.props.shelfUpdate}/>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <WantToRead books = {this.props.books.filter(b => b.shelf === 'wantToRead')}
                    shelfUpdate= {this.props.shelfUpdate}/>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Read books = {this.props.books.filter(b => b.shelf === 'read')}
                    shelfUpdate= {this.props.shelfUpdate}/>
              </div>
            </div>
          </div>
          <Link className="open-search" to='/SearchPage'>Add</Link>
        </div>
    )}
}

export default Library