import React from 'react'

class Book extends React.Component {

    handleChange = (event) => {
        this.props.shelfUpdate(this.props.book, event.target.value)
    }

    render() {
        const book = this.props.book
        const notAvailableImage = 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjzi4D-x6XlAhVDLlAKHWHPARkQjRx6BAgBEAQ&url=http%3A%2F%2Faccessories.hitchcocksmotorcycles.com%2FUsed-Parts-and-Bikes%2FVarious-Engine-Parts&psig=AOvVaw1Jqba2HiaNQjYHdpqEaQuo&ust=1571479636203649'
        
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : notAvailableImage })` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={this.handleChange}>
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