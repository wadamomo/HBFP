import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import ToolCreator from '../components/ToolCreator.jsx'
import ToolsDisplay from '../components/ToolsDisplay.jsx'

// import child components...

const mapStateToProps = store => {
  // provide pertinent state here
  return {
  toolList: store.tools.toolList,
  lastToolId: store.tools.lastToolId,
  newLocation: store.tools.newLocation,
  totalCards: store.tools.totalCards
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // onAddCard: (index) => {
    //   dispatch(actions.addCard(index))
    // },
    // onDeleteCard: (index) => {
    //   dispatch(actions.deleteCard(index))
    // },
    onAddTool: location => {
      dispatch(actions.addTool(location))
    }
  }
};

class ToolsContainer extends Component {
  render() {
    return(
      <div className="innerbox">
        <ToolCreator onAddTool={this.props.onAddTool} />
        <ToolsDisplay toolList={this.props.toolList} lastMarketId={this.props.lastMarketId} newLocation={this.props.newLocation} totalCards={this.props.totalCards} onAddCard={this.props.onAddCard} onDeleteCard={this.props.onDeleteCard} percentTotal={this.props.percentTotal}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);
