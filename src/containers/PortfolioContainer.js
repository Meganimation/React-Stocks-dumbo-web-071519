import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  handleClick=(event)=>{
    event.preventDefault
    console.log(this.props.event.target)
    this.setState(this.props.portfolio)
  }

  render() {
    // const allPortfolio = this.props.stocks.map((stock) => <Stock key={stock.id} stock={stock} handleClick={this.handleClick}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
      this.props.portfolio
          }
      </div>
    );
  }

}

export default PortfolioContainer;
