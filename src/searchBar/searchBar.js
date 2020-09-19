import React, { Component } from 'react';
import './searchBar.css';
import SearchBox from '../searchBox/searchBox'
import Filter from '../filter/filter';


export default class SearchBar extends Component{


  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      print: '',
      book:'',
    };
  }


  

  handleSearchTerm= (e) =>{
    this.setState({
      searchTerm:'q='+e+'+intitle',
    });
  }

  handlePrintOptions=(printOptions) =>{
    this.setState({
      print:'&printType='+printOptions,
    });
  }

  handleBookOptions = (bookOptions) =>{
    
    if(bookOptions!=="all"){
    this.setState({
      book:'&filter='+bookOptions
    });}

    if(bookOptions==='all'){
      this.setState({
        book:""
      });
    }
  }

  // handlePara2=()=>{
  //   if(this.state.print!=="All"){}
  // }

  fetchSearch=(e)=>{
    e.preventDefault();
    // console.log(this.state)
    const bookPara = this.state.book;
    const printPara = this.state.print;
    const termPara = this.state.searchTerm;

    console.log(bookPara);
    console.log(printPara);
    console.log(termPara);
    // if(para1==='&filter=ebooks'){return ("")}
    // console.log(para1)

    // if(para2!=="All"){return url = 'https://www.googleapis.com/books/v1/volumes?q='+para3+'+intitle&filter='+para1+'&printType='+para2+'&key=AIzaSyBYcbIiScyA7oFM8dWJHu6o0Zlr2FQMrkg'};

      const url = 'https://www.googleapis.com/books/v1/volumes?'+termPara+printPara+bookPara+'&key=AIzaSyBYcbIiScyA7oFM8dWJHu6o0Zlr2FQMrkg';
      //  console.log(url);

       const options = {
                method: 'GET',
                redirect:'follow'
        };


   

    fetch(url, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {

   console.log(data)
   if(data.totalItems>0)
   {this.props.handleResults(data);}
   else{alert ("There are no books to match your search!")}
  


    
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });

    
}

    
    render(){
        // console.log(this.state);
        return(
            <div>
                <form 
                onSubmit={e => this.fetchSearch(e)}
                >
                    <SearchBox                         
                       searchTerm={this.state.searchTerm}
                       handleSearchTerm={this.handleSearchTerm} 
                    />
                    <Filter
                        print={this.state.print}
                        handlePrintOptions={this.handlePrintOptions}
                        book={this.state.book}
                        handleBookOptions={this.handleBookOptions}
                    />
                <button 
                    type="submit"
                    >Search</button>
                </form>
                <div key={this.state.key}>
                  {this.state.title}
                  {this.state.author}
                </div>
                
            </div>
        )
    }
}
