import React, { Component } from 'react';
import './searchBar.css';


export default class SearchBar extends Component{

    render(){
    
        return(
            <div>
                <label htmlFor="title">Search</label>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    placeholder="keyword"
                    value=""
                    // onChange={e => this.searchChanged(e.target.value)}
                    />
                <button 
                    type="submit"
                    >Search</button>
                
            </div>
        )
    }
}
