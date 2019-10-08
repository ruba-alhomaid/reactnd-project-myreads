import React from 'react'

class Book extends React.Component {

    state = {
        shelf : this.props.book.shelf ? this.props.book.shelf : 'none'
    }

    handleChange = (event) => {
        this.setState(() => ({shelf : event.target.value}))
        this.props.shelfUpdate(this.props.book, event.target.value)
    }

    render() {
        const book = this.props.book

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.shelf} onChange={this.handleChange}>
                        <option value="move" disabled>Move to.S..</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book