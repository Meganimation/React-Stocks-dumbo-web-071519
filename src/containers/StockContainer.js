import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }




  handleClick=(event)=>{
    console.log(event.target)
    this.setState({porfolio: this.props.porfolio})
  }

  render() {
    const allStock = this.props.stocks.map((stock) => <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick}/>)
    return (
      <div>
        <h2>Stocks</h2>
        {
         allStock
        }
      </div>
    );
  }

}

export default StockContainer;
