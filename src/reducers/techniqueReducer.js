export default (state = "Bubble Sort", action) => {
  switch (action.type) {
    case "UPDATE_TECHNIQUE":
      return action.payload;
    default:
      return state;
  }
};
