const MarketCreator = props => (
    // how do we create the circuit between the store and an input field?
    // -> reference input field? 
    // how do we update the store from a presentation component?
    <div> 
      <h4> Create New Market </h4>
      <label>Location: <input id="location" type="text"/></label>
      <button onClick={() => {
        let location = document.getElementById("location").value;
        props.onAddMarket(location);
        }} >Add Market</button>
    </div>
  );
  
  export default MarketCreator;
  