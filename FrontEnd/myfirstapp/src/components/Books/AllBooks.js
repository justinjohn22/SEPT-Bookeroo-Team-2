import React, { Component } from 'react'
import axios from "axios"
import { useState } from 'react'

import '../styles/AllBooks.css'

function viewBook() {
  window.location.href='/books'
}

function addToCart() {
  window.location.href='/books'
}



class AllBooks extends Component {
  state = {
    books: []
  }
  

  componentDidMount() {
    // Get the list of books
    axios.get("http://localhost:8080/api/v1/books/all")
    .then(res => {
      const books = res.data;
      this.setState({ books })
    })
  }
  
  render() {
    return (
      <div className="container-books">
        <div>
          <div>
            {/* <input type="text" name="searchBar" id="searchBar" placeholder="search" />
            <button onclick="search()">Try it</button> */}
          </div>
          <div className="all-products ">
            <h4 className="slab-serif-white"><b>All Products</b></h4>
            <h5 className="slab-serif-white">filter | {this.state.books.length} items</h5>
          </div>
          <div className="books-container">
            { 
              this.state.books.filter((val)=> {
                if (val.bookName.toLowerCase().includes("".toLowerCase())) {
                  return val
                }
              }
              ).map(book => {
                return (   
                    <div className="image-group">
                      <div className="book-attributes">
                        <img className="cover-image" src={book.coverImage} alt="new"/>
                        <div className="name-cost">
                            <b><p className="book-name slab-serif">{book.bookName} <br /> <strong className="author">{book.author}</strong></p></b>
                            <div className="space"> </div>
                            <b><p className="slab-serif price">${book.cost} </p></b>
                        </div>  
                      </div>
                      <div className="image-btn-group"> 
                        <button className="view-book-btn slab-serif-white" onClick={viewBook}>
                          <b> View Book </b>
                        </button>
                        &nbsp;  
                        <button className="cart-btn slab-serif-white" onClick={addToCart}>
                          <b> Add to Cart </b>
                        </button>
                      </div>     
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default AllBooks;