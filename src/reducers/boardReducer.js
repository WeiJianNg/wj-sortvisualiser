import { shuffle } from "../actions/index";

const initBoardState = {
  size: 100,
  boardArray: shuffle(
    Array(100)
      .fill(0)
      .map((elm, index) => {
        return elm + index;
      })
  ),
  sortedArray: Array(100)
    .fill(0)
    .map((elm, index) => {
      return elm + index;
    }),
  boardColor: Array(100).fill(null),
};

export default (state = initBoardState, action) => {
  switch (action.type) {
    case "UPDATE_BOARD":
      return {
        size: action.payload.size,
        boardArray: action.payload.updatedBoard,
        sortedArray: action.payload.sortedArray,
        boardColor: action.payload.boardColor,
        isSorted: action.payload.isSorted,
      };
    default:
      return state;
  }
};
