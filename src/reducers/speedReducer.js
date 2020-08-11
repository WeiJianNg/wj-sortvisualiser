export default (state = 30000, action) => {
  switch (action.type) {
    case "UPDATE_SPEED":
      return action.payload;
    default:
      return state;
  }
};
