import BubbleSort from "../scripts/bubblesort";
import SelectionSort from "../scripts/selectionsort";
import InsertionSort from "../scripts/insertionsort";
import QuickSort from "../scripts/quickSort";
import HeapSort from "../scripts/heapsort";

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const updateArraySize = (size) => {
  return {
    type: "UPDATE_BOARD",
    payload: {
      size: size,
      updatedBoard: shuffle(
        Array(size)
          .fill(0)
          .map((elm, index) => {
            return elm + index;
          })
      ),
      sortedArray: Array(size)
        .fill(0)
        .map((elm, index) => {
          return elm + index;
        }),
      boardColor: Array(size).fill(null),
      isSorted: false,
    },
  };
};

export const updateTechnique = (technique) => {
  return {
    type: "UPDATE_TECHNIQUE",
    payload: technique,
  };
};

export const updateSortSpeed = (value) => {
  return {
    type: "UPDATE_SPEED",
    payload: value,
  };
};

export const updtProcessingStatus = () => {
  return {
    type: "UPDATE_PROCESS_STATUS",
  };
};

// Visualise sorting
export const visualiseSort = (technique, array) => {
  let results = [[], []];
  let timeline = [];
  let colorTimeline = [];
  if (technique === "Bubble Sort") {
    results = BubbleSort(array);
    timeline = results[0];
    colorTimeline = results[1];
  } else if (technique === "Selection Sort") {
    results = SelectionSort(array);
    timeline = results[0];
    colorTimeline = results[1];
  } else if (technique === "Insertion Sort") {
    results = InsertionSort(array);
    timeline = results[0];
    colorTimeline = results[1];
  } else if (technique === "Quick Sort") {
    results = QuickSort(array);
    timeline = results[0];
    colorTimeline = results[1];
  } else if (technique === "Heap Sort") {
    results = HeapSort(array);
    timeline = results[0];
    colorTimeline = results[1];
  }
  return {
    type: "UPDATE_TIMELINE",
    payload: { timeline: timeline, colorTimeline: colorTimeline },
  };
};

export const visualiseSortHelper = (array, arrayColor) => {
  return {
    type: "UPDATE_BOARD",
    payload: {
      size: array.length,
      updatedBoard: array.slice(),
      sortedArray: Array(array.length)
        .fill(0)
        .map((elm, index) => {
          return elm + index;
        }),
      boardColor: arrayColor.slice(),
      isSorted: isSorted(array.slice()),
    },
  };
};

const isSorted = (array) => {
  if (array === null) {
    return false;
  }
  for (let i = 0; i < array[i].length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};
