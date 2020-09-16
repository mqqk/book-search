import React, { Component } from 'react';
import './filter.css';


export default class Filter extends Component{

    render(){
    
        return(
            <div>
                <div>
                    <label htmlFor="filter-all">
                        Print Type: 
                        <select                    
                    
                            id="filter-all"
                            name="filter"                            
                            // onChange={e => this.props.handleFilter(e.target.value)}
                        >
                            <option value="none">Select one..</option>
                            
                        </select>
                    </label>
                    <label htmlFor="filter-all">
                        Book Type:
                        <select
                            id="filter-all"
                            name="filter"
                            // onChange={e => this.props.handleBookFilter(e.target.value)}
                        >
                            <option value="none">Select Book Type..</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
