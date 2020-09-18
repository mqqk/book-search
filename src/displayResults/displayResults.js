import React, { Component } from 'react';
import './displayResults.css';

export default class DisplayResults extends Component{
    render(){
        console.log(this.props.currentState)
        return(
            <div>
               {/* {this.props.currentState} */}
            </div>
        )
    }
}