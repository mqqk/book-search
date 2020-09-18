import React, { Component } from 'react';
import './searchBox.css';


export default class SearchBox extends Component{
    render(){
        return(
            <div>
                <label htmlFor="title">Search</label>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="keyword"
                    // value=""
                    onChange={e => this.props.handleSearchTerm(e.target.value)}
                />
            </div>
        )
    }
}