import * as types from '../constants/actionTypes';

const initialState = {
  allTools: [{chicken: 1}],
};


const toolsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TOOL':
      console.log('adding tool')
      let newState = JSON.parse(JSON.stringify(state));
      // let newTool = {
      //   toolName: document.getElementById("toolName").value,
      //   toolApp: document.getElementById("toolApp").value,
      //   toolType: document.getElementById("toolType").value,
      //   toolDesc: document.getElementById("toolDesc").value,
      // }
      let newTool = {
        toolName: action.toolName,
        toolApp: action.toolApp,
        toolType: action.toolType,
        toolDesc: action.toolDesc,
      }
      newState.allTools = newState.allTools.slice();
      newState.allTools.push(newTool)
      console.log(newState)
      return newState;

    default:
      return state;
  }
};

export default toolsReducer;







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