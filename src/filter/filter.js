import React, { Component } from 'react';
import './filter.css';


export default class Filter extends Component{

    render(){

        const options={
            bookType:["all","free-ebooks",'ebooks'],
            printType:['all','books','magazines']
        }

        // console.log(this.props);
        const printOptions = options.printType.map((item,i) => 
        <option value={item} key={i}>{item}</option>)

        const bookOptions = options.bookType.map((item,i) =>
            <option value={item} key={i}>{item}</option>)
    
        return(
            <div>
                <div>
                    <label htmlFor="filter-all">
                        Print Type: 
                        <select                    
                    
                            id="filter-all"
                            name="filter"
                            defaultValue=""                           
                            onChange={e => this.props.handlePrintOptions(e.target.value)}
                        >
                            <option value="none">Select one..</option>
                            {printOptions}
                            
                        </select>
                    </label>
                    <label htmlFor="filter-all">
                        Book Type:
                        <select
                            id="filter-all"
                            name="filter"
                            defaultValue=""
                            onChange={e => this.props.handleBookOptions(e.target.value)}
                        >
                            <option value="none">Select Book Type..</option>
                            {bookOptions}
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
