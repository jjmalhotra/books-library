import React from 'react';
import ReactDOM from 'react-dom'; //For Render
import './index.css';
import {books} from './books-record';

const Header = () =>{
  return(
    <>
    <header className='header'>
    Books Gallery
    </header>
    <BookList/>
    <Footer/>
    </>
  )
}

//Create the component for the list of books
const BookList = ()=>{
  return(
    <section className='book-list'> 
      {
        books.map((book)=>{
          const{img, title, author, reviews} = book;
          return <Book book={book} key={book.id}/>
        })
      }
    </section>
  )
}

//Create the component for the book tag
const Book = (props)=>{
  const {img, title, author, reviews}=props.book;
  return(
    <article className='book'>
      <img src={img} alt="Book"/>
      <h4>{title}</h4>
      <h5>by {author}</h5>
      <h5>Reviews: {reviews}<sup><span class="color-star">&#9733;</span></sup></h5>
    </article>
    
  )
}


const Footer = () =>{
  return(
    <>
    <footer className='footer'>
    &copy; AshGallery
    </footer>
    </>
  )
}

//Render the Books records
ReactDOM.render(<Header/>, document.getElementById('root')); 