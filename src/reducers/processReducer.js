export default (state = { process: false }, action) => {
  switch (action.type) {
    case "UPDATE_PROCESS_STATUS":
      return { process: !state.process };
    default:
      return state;
  }
};
