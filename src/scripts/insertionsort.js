export default (array) => {
  let timeline = [];
  let colorTimeline = [];
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      // For animation
      let color = Array(array.length).fill(null);
      color[j] = "#8d42f5";

      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        [color[j], color[j - 1]] = ["red", "red"];
      }
      timeline.push(array.slice());
      colorTimeline.push(color.slice());
    }
  }
  return [timeline, colorTimeline];
};
