import React, { Component } from 'react';
import './App.css';
import Title from './title/title';
import SearchBar from './searchBar/searchBar';
import DisplayResults from './displayResults/displayResults';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      print: '',
      book:'',
    };
  }

  handleSearchTerm= (e) =>{
    // e.preventDefault();
    this.setState({
      searchTerm:e
    });
  }

  handleFilterOptions=(filterOptions) =>{
    this.setState({
      book:filterOptions
    });
  }

  handlePrintOptions = (printOptions) =>{
    this.setState({
      print:printOptions
    });
  }

  

  

  // fetchSearch(this.state){


  //   console.log(this.state);}
    // const url = 'https://www.googleapis.com/books/v1/volumes?q=harry potter+intitle&key=AIzaSyBYcbIiScyA7oFM8dWJHu6o0Zlr2FQMrkg';
  //   const options = {
  //     method: 'GET',
  //     redirect:'follow'
  //   };

  //   fetch(url, options)
  //     .then(res => {
  //       if(!res.ok) {
  //         throw new Error('Something went wrong, please try again later.');
  //       }
  //       return res;
  //     })
  //     .then(res => res.json())
  //     .then(data => {

  //       console.log(data);
  //       // this.setState({
  //       //   bookmarks: data,
  //       //   error: null
  //       // });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: err.message
  //       });
  //     });

  // }



  render(){
    // console.log(this.state)

  
    
    return (
    <div className="App">
      <Title />      
      <SearchBar
        fetchSearch={this.fetchSearch} 
        searchTerm={this.state.searchTerm}
        handleSearchTerm={this.handleSearchTerm}
        print={this.state.print}
        handlePrintOptions={this.handlePrintOptions}
        book={this.state.book}
        handleFilterOptions={this.handleFilterOptions}                          
      />
      <DisplayResults
        currentState={this.state}
      />
    </div>
    );
  }
}


