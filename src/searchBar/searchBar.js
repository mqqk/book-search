import React, { Component } from 'react';
import './searchBar.css';
import SearchBox from '../searchBox/searchBox'
import Filter from '../filter/filter';


export default class SearchBar extends Component{

    fetchSearch=(e)=>{
        e.preventDefault();
        console.log(this.props)

        const para1 = this.props.book;
        const para2 = this.props.print;
        const para3 = this.props.searchTerm;

        const url = 'https://www.googleapis.com/books/v1/volumes?q='+para3+'+intitle&filter='+para1+'&printType='+para2+'&key=AIzaSyBYcbIiScyA7oFM8dWJHu6o0Zlr2FQMrkg';

           const options = {
                    method: 'GET',
                    redirect:'follow'
            };


        console.log(url);

        fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {

        console.log(data);
        
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

        
    }
      

    
    render(){
        // console.log(this.props);
        return(
            <div>
                <form 
                onSubmit={e => this.fetchSearch(e)}
                >
                    <SearchBox 
                       fetchSearch={this.props.fetchSearch} 
                       searchTerm={this.props.searchTerm}
                       handleSearchTerm={this.props.handleSearchTerm} 
                    />
                    <Filter
                        print={this.props.print}
                        handlePrintOptions={this.props.handlePrintOptions}
                        book={this.props.book}
                        handleFilterOptions={this.props.handleFilterOptions}
                    />
                <button 
                    type="submit"
                    >Search</button>
                </form>
                
            </div>
        )
    }
}
