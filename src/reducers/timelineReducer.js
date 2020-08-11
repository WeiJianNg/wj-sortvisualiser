export default (state = { timeline: null, colorTimeline: null }, action) => {
  switch (action.type) {
    case "UPDATE_TIMELINE":
      return {
        timeline: action.payload.timeline.slice(),
        colorTimeline: action.payload.colorTimeline.slice(),
      };
    default:
      return state;
  }
};
