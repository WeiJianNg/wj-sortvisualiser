export default (array) => {
  let timeline = [];
  let colorTimeline = [];

  // Write your code here.
  buildMaxHeap(array, timeline, colorTimeline);
  for (let endIndex = array.length - 1; endIndex > 0; endIndex--) {
    // Swap First Index with endIndex - which is the last index of the heap
    [array[0], array[endIndex]] = [array[endIndex], array[0]];

    // For animation
    let color = Array(array.length).fill(null);
    [color[0], color[endIndex]] = ["red", "red"];
    timeline.push(array.slice());
    colorTimeline.push(color.slice());

    // Sift down from first Index to ensure heap remains
    siftDown(0, endIndex - 1, array, timeline, colorTimeline);
  }

  // Return TimeLine and ColorTimeLine after adding animation
  return [timeline, colorTimeline];
};

const buildMaxHeap = (array, timeline, colorTimeline) => {
  const firstParentNode = Math.floor((array.length - 2) / 2);
  for (let currentIndex = firstParentNode; currentIndex >= 0; currentIndex--) {
    siftDown(currentIndex, array.length - 1, array, timeline, colorTimeline);
  }
};

const siftDown = (currentIndex, endIndex, array, timeline, colorTimeline) => {
  let childOneIndex = currentIndex * 2 + 1;
  while (childOneIndex <= endIndex) {
    let color = Array(array.length).fill(null);
    const childTwoIndex =
      currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
    let indexToSwap;
    if (childTwoIndex > -1 && array[childTwoIndex] > array[childOneIndex]) {
      indexToSwap = childTwoIndex;
    } else {
      indexToSwap = childOneIndex;
    }
    color[currentIndex] = "#8d42f5";
    timeline.push(array.slice());
    colorTimeline.push(color.slice());

    if (array[indexToSwap] > array[currentIndex]) {
      [array[indexToSwap], array[currentIndex]] = [
        array[currentIndex],
        array[indexToSwap],
      ];

      // For animation
      [color[indexToSwap], color[currentIndex]] = ["red", "red"];
      timeline.push(array.slice());
      colorTimeline.push(color.slice());

      currentIndex = indexToSwap;
      childOneIndex = currentIndex * 2 + 1;
    } else {
      return;
    }
  }
};
