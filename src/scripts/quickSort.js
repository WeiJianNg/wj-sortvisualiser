export default (array) => {
  let colorTimeline = [];
  let timeline = [];
  let startIndex = 0;
  let endIndex = array.length - 1;

  // Quick Sort Helper function
  quickSortHelper(startIndex, endIndex, array, timeline, colorTimeline);
  return [timeline, colorTimeline];
};

const quickSortHelper = (
  startIndex,
  endIndex,
  array,
  timeline,
  colorTimeline
) => {
  // Base Case
  if (startIndex >= endIndex) {
    return;
  }

  let pivot = startIndex;
  let leftPointer = startIndex + 1;
  let rightPointer = endIndex;

  while (leftPointer <= rightPointer) {
    let color = Array(array.length).fill(null);
    color[pivot] = "blue";
    [color[leftPointer], color[rightPointer]] = ["#8d42f5", "#8d42f5"];
    if (
      array[pivot] < array[leftPointer] &&
      array[pivot] > array[rightPointer]
    ) {
      // Swap position between array at left and right pointer. Left should be less than pivot
      // Right should be more than pivot
      [array[leftPointer], array[rightPointer]] = [
        array[rightPointer],
        array[leftPointer],
      ];
      [color[leftPointer], color[rightPointer]] = ["red", "red"];
    }
    if (array[pivot] >= array[leftPointer]) {
      leftPointer += 1;
    }
    if (array[pivot] <= array[rightPointer]) {
      rightPointer -= 1;
    }

    // For animation
    timeline.push(array.slice());
    colorTimeline.push(color.slice());
  }

  // Swap pivot with right pointer. This would ensure all values on the right of the pivot to be larger
  [array[pivot], array[rightPointer]] = [array[rightPointer], array[pivot]];

  // For animation
  let color = Array(array.length).fill(null);
  [color[pivot], color[rightPointer]] = ["red", "red"];
  timeline.push(array.slice());
  colorTimeline.push(color.slice());

  // Check which subarray is smaller
  const leftSubArrayIsSmaller =
    rightPointer - 1 - startIndex < endIndex - (rightPointer + 1);

  if (leftSubArrayIsSmaller) {
    quickSortHelper(
      startIndex,
      rightPointer - 1,
      array,
      timeline,
      colorTimeline
    );
    quickSortHelper(rightPointer + 1, endIndex, array, timeline, colorTimeline);
  } else {
    quickSortHelper(rightPointer + 1, endIndex, array, timeline, colorTimeline);
    quickSortHelper(
      startIndex,
      rightPointer - 1,
      array,
      timeline,
      colorTimeline
    );
  }
};
