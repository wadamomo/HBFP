/**
 * ************************************
 *
 * @module  MarketDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each tool
 *
 * ************************************
 */

import React from 'react';

const ToolDisplay = (props) => (
  <div className="toolBox">box
    {/* <h4>Market ID: {props.toolList[props.i].toolId}</h4>
    <h4>Location: {props.newLocation[props.i]}</h4>
    <h4>Cards: {props.toolList[props.i].cards}</h4>
    <h4>% of total: {props.toolList[props.i].percentTotal}</h4>
    <button onClick={() => {props.onAddCard(props.i)}}>Add Card</button>
    <button onClick={() => {props.onDeleteCard(props.i)}}>Delete Card</button> */}
  </div>
);

export default ToolDisplay;