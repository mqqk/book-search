import React, { Component } from 'react';
import './App.css';
import Title from './title/title';
import Filter from './filter/filter';
import SearchBar from './searchBar/searchBar';


export default class App extends Component {
  render(){
    
    return (
    <div className="App">
      <Title />      
      <SearchBar />
      <Filter />
    </div>
    );
  }
}


