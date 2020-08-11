export default (state = 15000, action) => {
  switch (action.type) {
    case "UPDATE_SPEED":
      return action.payload;
    default:
      return state;
  }
};
