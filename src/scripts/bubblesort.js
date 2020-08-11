export default (array) => {
  let timeline = [];
  let colorTimeline = [];
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;

        // For animation
        let color = Array(array.length).fill(null);
        [color[i], color[i + 1]] = ["red", "red"];
        timeline.push(array.slice());
        colorTimeline.push(color.slice());
      }
    }
  }
  return [timeline, colorTimeline];
  // Return timeline of sorting the array
};
