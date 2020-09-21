import React, { Component } from 'react';
import './searchBox.css';


export default class SearchBox extends Component{
    render(){
        return(
            <div className='searchBox'>
                <label 
                    className="searchLabel"
                    htmlFor="title">Search
                </label>
                <input
                    className="actualBox"
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="keyword"
                    // value=""
                    onChange={e => this.props.handleSearchTerm(e.target.value)}
                />

<button 
                    className="searchButton"
                    type="submit"
                    >Search</button>
            </div>
        )
    }
}