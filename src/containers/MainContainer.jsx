import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';

// import from child components...

//take date from store, sends to props
const mapStateToProps = store => ({
  // add pertinent state here...totalMarkets, total cards
    totalCards: store.markets.totalCards,
    totalMarkets: store.markets.totalMarkets

});
//these are the functions, actions refer to here
const mapDispatchToProps = dispatch => {
  return {}
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          { /* Start adding components here... */ }
          <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets}/>
          <MarketsContainer/>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


// const PhotoGrid = React.createClass({
//   render() {
//     return (
//       <div className="photo-grid">
//         {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
//       </div>
//     )
//   }
// });
