import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input onChange={(event) => props.sortStocks(event.target.value)} name = "sort" type="radio" value="Alphabetically"  checked={null}
       />
        alphabetically
      </label>
      <label>
        <input onChange={(event) => props.sortStocks(event.target.value)} name = "sort" type="radio" value="Price" checked={null}
        />
        price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterStocks}>

          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
