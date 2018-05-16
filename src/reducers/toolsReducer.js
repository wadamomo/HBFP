import * as types from '../constants/actionTypes';

const initialState = {
  totaltools: 0,
//   totalCards: 0,
//   toolList: [],
//   lastMarketId: 10000,
//   newLocation: [],
};


const toolsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TOOL':
      let newState = JSON.parse(JSON.stringify(state));
    //   newState.totaltools++;
    //   newState.newLocation.push(document.getElementById("location").value);
    //   newState.toolList = newState.toolList.slice();
    //   newState.toolList.push({toolId: newState.lastMarketId, location: action.location, cards: 0, percentTotal: 0});
    //   newState.lastMarketId++;
      return newState;
    // case 'ADD_CARD': 
    //   let addState = JSON.parse(JSON.stringify(state));
    //   addState.totalCards++;
    //   addState.toolList[action.index].cards++;
    //   addState.toolList.map(el => {
    //     el.percentTotal = ((el.cards / addState.totalCards) * 100).toFixed(2);
    //     return el;
    //   })
    //   return addState;
    //   case 'DELETE_CARD':
    //   let delState = JSON.parse(JSON.stringify(state));
    //   delState.totalCards--;
    //   delState.toolList[action.index].cards--;
    //   delState.toolList.map(el => {
    //     el.percentTotal = ((el.cards / delState.totalCards) * 100).toFixed(2);
    //     return el;
    //   })
    //   return delState;
    default:
      return state;
  }
};

export default toolsReducer;