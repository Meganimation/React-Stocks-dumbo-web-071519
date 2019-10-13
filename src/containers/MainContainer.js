import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: []
  }

  addPortfolio = (e) => {
    if (this.state.portfolioStocks.includes(e)) {
      console.log("done");
    } else {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, e]
      });
    }
  };

  removeItem = (stock) => {
  const newPortfolio = this.state.portfolioStocks.filter(stockk => stockk.id !== stock.id);
  this.setState({
    portfolioStocks: newPortfolio
  });
};



  sortStocks = (event) => {

    if(event === "Alphabetically"){
      this.setState({displayStocks : this.state.displayStocks.sort((stockA, stockB) => stockA.name > stockB.name ? 1 : -1)})
    }else {
      this.setState({displayStocks : this.state.displayStocks.sort((stockA, stockB) => stockA.price > stockB.price ? -1 : 1)})
    }
  }


    filterStocks =(event)=>{
    if (event.target.value !== "All") {
      this.setState({
        displayStocks: this.state.stocks.filter(
          stock => stock.type === event.target.value
        )
      });
    }
      else {
        this.setState({
          displayStocks: this.state.stocks
        })
      }
    }


  handleClick=(event)=>{
    console.log(event.target)
    this.setState({portfolio: 'eee'})
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({
      stocks: data,
      displayStocks: data
    }))
  }




  render() {

const stocks = this.state.filteredStocks ? this.handleFilter : this.state.stocks

    return (
      <div>
        <SearchBar 
        sortStocks={this.sortStocks} 
        filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.displayStocks} handleClick={this.handleClick }  addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} checked={this.state.checked} 
              portfolioStocks={this.state.portfolioStocks}
              removeItem={this.removeItem} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
