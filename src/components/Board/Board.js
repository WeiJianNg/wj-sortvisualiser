import React from "react";
import { connect } from "react-redux";

const Board = ({ board, sortedArray, boardColor }) => {
  return (
    <div className="pt-5 d-flex justify-content-center align-items-end">
      {board.boardArray.map((elm, index) => {
        const blockColor = boardColor[index] !== null ? boardColor[index] : "";
        const styles = {
          width: `${90 / board.size}vw`,
          height: `${70 * (elm / Math.max.apply(null, board.boardArray))}vh`,
          border: "solid 1px black",
          backgroundColor: blockColor,
        };
        return (
          <div
            className={
              elm === sortedArray[index]
                ? "animate__animated animate__fadeInDown block sorted"
                : "animate__animated animate__fadeInDown block"
            }
            key={index}
            style={styles}
          ></div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    board: state.boardState,
    sortedArray: state.boardState.sortedArray,
    boardColor: state.boardState.boardColor,
  };
};

export default connect(mapStateToProps, {})(Board);
