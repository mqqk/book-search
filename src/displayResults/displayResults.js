import React, { Component } from 'react';
import './displayResults.css';
import PriceList from "../PriceList/priceList"

export default class DisplayResults extends Component{

    
    render(){
        // console.log(this.props.currentState.books)

        const eachBook = this.props.currentState.books.map((book,idx) =>{
            // console.log(book.saleInfo.saleability)
            return(
            <div key={idx} className="displayResults">
                <h3>{book.volumeInfo.title}</h3>
                <div className="resultsBody">
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="thumbnail of book" />
                    <div>
                    <h4>Author:{book.volumeInfo.authors}</h4>
                    <PriceList 
                        cost={book.saleInfo}
                    />                
                    <p>Description:{book.volumeInfo.description}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
            )
        })
        return(
             <>
                {eachBook}
            </>
        )
    }
}