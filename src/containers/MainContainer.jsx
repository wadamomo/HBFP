import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ToolsContainer from './ToolsContainer.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

// import from child components...

//take date from store, sends to props
const mapStateToProps = store => ({
  // add pertinent state here...totalTools, total cards
    totalTools: store.tools.totalTools
});
//these are the functions, actions refer to here
const mapDispatchToProps = dispatch => {
  return {}
};

class MainContainer extends Component {
  render() {
    return(
      <div className="container">
        <Header />
        <div className="outerBox">
          <h1 id="header">MegaTool Loyalty Cards</h1>
          {/* <TotalsDisplay totalCards={this.props.totalCards} totalTools={this.props.totalTools}/> */}
          <ToolsContainer />
        </div>
          <Footer />
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
