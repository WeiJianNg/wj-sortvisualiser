import { shuffle } from "../actions/index";

const initBoardState = {
  size: 80,
  boardArray: shuffle(
    Array(80)
      .fill(0)
      .map((elm, index) => {
        return elm + index;
      })
  ),
  sortedArray: Array(80)
    .fill(0)
    .map((elm, index) => {
      return elm + index;
    }),
  boardColor: Array(80).fill(null),
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
