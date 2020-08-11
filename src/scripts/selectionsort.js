export default (array) => {
  let timeline = [];
  let colorTimeline = [];
  for (let startIdx = 0; startIdx < array.length - 1; startIdx++) {
    let minimum = array[startIdx];
    let minIdx = startIdx;
    // Find minimum value and indx
    for (let j = startIdx + 1; j < array.length; j++) {
      if (array[j] < minimum) {
        minimum = array[j];
        minIdx = j;
      }

      // For Traversing animation
      let subColor = Array(array.length).fill(null);
      subColor[j] = "#8d42f5";
      colorTimeline.push(subColor.slice());
      timeline.push(array.slice());
    }
    // Perform swap
    [array[startIdx], array[minIdx]] = [array[minIdx], array[startIdx]];

    // For Swapping Animation
    let color = Array(array.length).fill(null);
    [color[startIdx], color[minIdx]] = ["red", "red"];
    colorTimeline.push(color.slice());
    timeline.push(array.slice());
  }
  return [timeline, colorTimeline];
};
