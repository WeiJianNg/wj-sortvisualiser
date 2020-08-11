import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

import {
  updateArraySize,
  visualiseSort,
  updateTechnique,
  visualiseSortHelper,
  updateSortSpeed,
  updtProcessingStatus,
} from "../../actions/index";

const SortSettings = ({
  boardSize,
  board,
  technique,
  timeline,
  colorTimeline,
  speed,
  processing,
  isSorted,
  visualiseSort,
  updateSortSpeed,
  visualiseSortHelper,
  updateTechnique,
  updateArraySize,
  updtProcessingStatus,
}) => {
  const collapseButton = createRef();
  useEffect(() => {
    if (timeline !== null && !isSorted) {
      // eslint-disable-next-line
      updtProcessingStatus();
      const delay = speed / timeline.length;
      for (let i = 0; i < timeline.length; i++) {
        setTimeout(() => {
          visualiseSortHelper(
            timeline[i],
            i === timeline.length - 1
              ? Array(timeline[i].length).fill(null)
              : colorTimeline[i]
          );
          if (i === timeline.length - 1) {
            updtProcessingStatus();
          }
        }, delay * i);
      }
    }
  }, [timeline, visualiseSortHelper, colorTimeline, updtProcessingStatus]);
  return (
    <div className="sv-header" style={{ color: "white" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Sort Visualiser</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={collapseButton}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-link slider d-flex align-items-center">
                <div>Size of Array:</div>
                <input
                  type="range"
                  min="80"
                  max="130"
                  step="1"
                  value={boardSize}
                  onChange={(event) => {
                    updateArraySize(parseInt(event.target.value));
                  }}
                  disabled={processing}
                />
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link slider d-flex align-items-center">
                <div>Speed: +</div>
                <input
                  type="range"
                  min="20000"
                  max="80000"
                  step="10000"
                  value={speed}
                  onChange={(event) => {
                    updateSortSpeed(parseInt(event.target.value));
                  }}
                  disabled={processing}
                />
                -
              </span>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {technique === null ? "Select Technique" : technique}
              </div>
              <div
                className="pt-0 pb-0 dropdown-menu"
                aria-labelledby="navbarDropdown"
                onClick={(event) => {
                  if (!processing) {
                    updateTechnique(event.target.innerText);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <span className="dropdown-item">Bubble Sort</span>
                <span className="dropdown-item">Insertion Sort</span>
                <span className="dropdown-item">Selection Sort</span>
                <span className="dropdown-item">Quick Sort</span>
                <span className="dropdown-item">Heap Sort</span>
              </div>
            </li>
            <li className="nav-item d-flex align-items-center">
              <button
                type="button"
                className="ml-1 btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  updateArraySize(boardSize);
                }}
                disabled={processing}
              >
                Shuffle
              </button>
              <button
                type="button"
                className="ml-1 btn btn-success"
                onClick={(event) => {
                  event.preventDefault();
                  if (!isSorted) {
                    visualiseSort(technique, board);
                    collapseButton.current.click();
                  } else {
                    window.alert("Array is already sorted. Shuffle to reset!");
                  }
                }}
                disabled={processing}
              >
                Visualise !
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boardSize: state.boardState.size,
    board: state.boardState.boardArray,
    technique: state.technique,
    timeline: state.timeline.timeline,
    colorTimeline: state.timeline.colorTimeline,
    speed: state.speed,
    processing: state.process.process,
    isSorted: state.boardState.isSorted,
  };
};

export default connect(mapStateToProps, {
  updateArraySize,
  visualiseSort,
  updateTechnique,
  visualiseSortHelper,
  updateSortSpeed,
  updtProcessingStatus,
})(SortSettings);
