import React from 'react';

const ToolCreator = props => (
    <div> 
      <h4> Add a Workflow Tool </h4>
      <label>Location: <input id="location" type="text"/></label>
      
      <button onClick={() => {
        let location = document.getElementById("location").value;
        props.onAddTool(location);
        }}>Add New Tool</button>
    </div>
  );
  
  export default ToolCreator;
  