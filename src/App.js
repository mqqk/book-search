import React, { Component } from 'react';
import './App.css';
import Title from './title/title';
import SearchBar from './searchBar/searchBar';
import DisplayResults from './displayResults/displayResults';





export default class App extends Component {



  constructor (props){
    super(props);
    this.state={
      books:[],
    }
  }

  handleResults=(data)=>{
    // console.log('hi',this.state)
      this.setState({
        books:[]
      })

      this.setState({
       books:data.items
      })
     
  }

  // handleNoResults




  render(){
    // console.log(bookData)
    // console.log(this.state)

  
    
    return (
    <div className="App">
      <Title />      
      <SearchBar        
        handleResults={this.handleResults}
        appState={this.state}                                 
      />
      <DisplayResults
        currentState={this.state}
      />
    </div>
    );
  }
}


