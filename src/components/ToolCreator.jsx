import React from 'react';

const MarketCreator = props => (
    <div> 
      <h4> Create New Market </h4>
      <label>Location: <input id="location" type="text"/></label>
      <button onClick={() => {
        let location = document.getElementById("location").value;
        props.onAddMarket(location);
        }}>Add Market</button>
    </div>
  );
  
  export default MarketCreator;
  