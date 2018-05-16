import React from 'react';

const ToolCreator = props => (
    <div> 
      <h4> Add a Workflow Tool </h4>
        <label>Name: (e.g. Delete Line)<input id="toolName" type="text"/></label>
        <label>Application: (e.g. VSCode)<input id="toolApp" type="text"/></label>
        <label>Type: (e.g. Keyboard Shortcut)<input id="toolType" type="text"/></label>
        <label>Description: (e.g. VSCode)<input id="toolDesc" type="text"/></label>
        <button onClick={() => {
            // let toolName = document.getElementById("toolName").value;
            // let toolApp = document.getElementById("toolApp").value;
            // let toolType = document.getElementById("toolType").value;
            // let toolDescription = document.getElementById("toolDescription").value;
            console.log(toolName.value)
            props.onAddTool(toolName.value, toolApp.value, toolType.value, toolDesc.value);
            }}>Add New Tool
        </button>
    </div>
  );
  
  export default ToolCreator;
  