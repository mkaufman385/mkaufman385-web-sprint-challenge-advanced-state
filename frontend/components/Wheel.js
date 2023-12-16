import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

// const handleClickClockwise = () => {
//   moveClockwise();
// };

// const handleClickCounterClockwise = () => {
//   moveCounterClockwise();
// };

export function Wheel({ wheel }) {
  // function isNumber(value) {
  //   return typeof value === "number";
  // }
  // console.log(isNumber(wheel));

  console.log("Wheel Function", wheel);
  const handleClickClockwise = () => {
    console.log("clockwise button working");
    moveClockwise();
  };

  const handleClickCounterClockwise = () => {
    console.log("counterClockwise button working");
    moveCounterClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`cog${wheel === 0 ? " active" : ""}`}
          style={{ "--i": 0 }}
        >
          {wheel === 0 ? "B" : null}
        </div>
        <div
          className={`cog${wheel === 1 ? " active" : ""}`}
          style={{ "--i": 1 }}
        >
          {wheel === 1 ? "B" : null}
        </div>
        <div
          className={`cog${wheel === 2 ? " active" : ""}`}
          style={{ "--i": 2 }}
        >
          {wheel === 2 ? "B" : null}
        </div>
        <div
          className={`cog${wheel === 3 ? " active" : ""}`}
          style={{ "--i": 3 }}
        >
          {wheel === 3 ? "B" : null}
        </div>
        <div
          className={`cog${wheel === 4 ? " active" : ""}`}
          style={{ "--i": 4 }}
        >
          {wheel === 4 ? "B" : null}
        </div>
        <div
          className={`cog${wheel === 5 ? " active" : ""}`}
          style={{ "--i": 5 }}
        >
          {wheel === 5 ? "B" : null}
        </div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleClickCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={handleClickClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    // state: state.wheel,
    wheel: state.wheel,
  };
};

export default connect(mapStateToProps, {})(Wheel);
