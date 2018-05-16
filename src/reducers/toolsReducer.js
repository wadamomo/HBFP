import * as types from '../constants/actionTypes';

const initialState = {
  allTools: [
    {
      toolName: "npm install with -D flag", 
      toolApp: "Terminal", 
      toolType: "NPM Shortcut", 
      toolDesc: "saves whatever you install to the dev dependencies (same thing as doing '--save-dev')",
      toolLikes: 0
    },
    {
      toolName: "Duplicate Lines Up and Down", 
      toolApp: "VS Code", 
      toolType: "Keyboard Shortcut", 
      toolDesc: "Shift + Option + Down Arrow / Shift + Option + Down Arrow. Without highlighting anything you can duplicate a line. You can also drag your mouse haphazardly over a bunch of lines and with the same shortcut it will copy down the entire lines",
      toolLikes: 0
    },
    {
      toolName: "Color Zilla", 
      toolApp: "Chrome", 
      toolType: "Extension", 
      toolDesc: "Gives you a pointer so you can click anywhere on a webpage and it will give you the both the rgb and hex codes for that color",
      toolLikes: 0
    },
    {
      toolName: "Unhide While Cycling Apps", 
      toolApp: "Mac OS", 
      toolType: "Keyboard Shortcut", 
      toolDesc: "One of my personal favorites. When shuffling through apps with CMD + Tab sometimes app windows are closed so even when you CMD + Tab to it, the window doesn't open. While cycling through the apps keep the CMD key pressed down, let go of tab when you're on the app you need to unhide, and press the option key, then let go off both CMD and option at the same time. Easier than it sounds! I'm not crazy!",
      toolLikes: 0
    },
  ],
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
        toolLikes: action.toolLikes
      }
      newState.allTools = newState.allTools.slice();
      newState.allTools.push(newTool)
      console.log(newState)
      return newState;
    case 'ADD_LIKE': 
      let addState = JSON.parse(JSON.stringify(state));
      addState.toolLikes++;
      addState.allTools[action.index].toolLikes++;
      return addState;
      case 'DELETE_LIKE':
      let delState = JSON.parse(JSON.stringify(state));
      delState.toolLikes--;
      delState.allTools[action.index].toolLikes--;
      return delState;
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