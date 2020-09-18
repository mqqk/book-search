import React, { Component } from 'react';
import './filter.css';


export default class Filter extends Component{

    render(){

        const options={
            filter:["free-ebooks",'ebooks'],
            printType:['all','books','magazines']
        }

        // console.log(this.props);
        const filterOptions = options.filter.map((item,i) => 
        <option value={item} key={i}>{item}</option>)

        const printOptions = options.printType.map((item,i) =>
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
                            onChange={e => this.props.handleFilterOptions(e.target.value)}
                        >
                            <option value="none">Select one..</option>
                            {filterOptions}
                            
                        </select>
                    </label>
                    <label htmlFor="filter-all">
                        Book Type:
                        <select
                            id="filter-all"
                            name="filter"
                            defaultValue=""
                            onChange={e => this.props.handlePrintOptions(e.target.value)}
                        >
                            <option value="none">Select Book Type..</option>
                            {printOptions}
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
