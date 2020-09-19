import React, { Component } from 'react';
import './priceList.css';

export default class PriceList extends Component{
    render(){

        // console.log(this.props)
        const price = this.props.cost.saleability;
        // console.log(price)
        
        
        if(price==="FREE"){return(<h5>Price:This book is free!</h5>)}
        if(price==="FOR_SALE"){return(<h5>Price:{this.props.cost.listPrice.amount}</h5>)}
        return(
            <div className="priceLine">{price}</div>
        )
    }
}