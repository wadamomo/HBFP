import React from 'react';

const ToolDisplay = (props) => (
  <div className="singleTool">
    <h4>Name: {props.allTools[props.i].toolName}</h4>
    <h4>Application: {props.allTools[props.i].toolApp}</h4>
    <h4>Type: {props.allTools[props.i].toolType}</h4>
    <h4>Description: {props.allTools[props.i].toolDesc}</h4>
    <div className="voteButtons">
      <h3>{props.allTools[props.i].toolLikes}</h3>
      <button onClick={() => {console.log(`hello: ${props.i}`); {props.onAddLike(props.i)}}}>+</button>
      <button onClick={() => {props.onDeleteLike(props.i)}}>-</button>
    </div>
  </div>
);

export default ToolDisplay;