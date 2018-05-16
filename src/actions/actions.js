// import actionType constants
import * as types from '../constants/actionTypes'

export const addTool = (index) => ({
  type: 'ADD_TOOL',
  index
});

// export const deleteCard = (index) => ({
//   type: 'DELETE_CARD',
//   index
// });

// // add more action creators

// export const addMarket = (location, cards, percentTotal) => ({
//   type: 'ADD_MARKET',
//   location,
//   cards,
//   percentTotal
// });


// export function increment(index) {
//   return {
//       type: 'INCREMENT_LIKES',
//       index
//   }
// }
// // add comment
// export function addComment(postId, author, comment) {
//   return {
//       type: 'ADD_COMMENT',
//       postId,
//       author,
//       comment
//   }
// }

// // remove comment
// export function removeComment(postId, i) {
//   return {
//       type: 'REMOVE_COMMENT',
//       i,
//       postId
//   }
// }