import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

export function Wheel({ wheel, moveClockwise, moveCounterClockwise }) {
  const value = wheel;

  if (typeof value === "number") {
    console.log("The value is a number in Wheel.");
  } else {
    console.log("The value is not a number in Wheel.");
  }

  console.log("Wheel Function", wheel);

  // const handleMoveClockwiseClick = () => {
  //   console.log("Clockwise Click working");
  //   moveClockwise();
  // };

  // const handleMoveCounterClockwiseClick = () => {
  //   console.log("CounterClockwise Click working");
  //   moveCounterClockwise();
  // };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`cog ${wheel === 0 ? " active" : ""}`}
          style={{ "--i": 0 }}
        >
          {wheel === 0 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 1 ? " active" : ""}`}
          style={{ "--i": 1 }}
        >
          {wheel === 1 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 2 ? " active" : ""}`}
          style={{ "--i": 2 }}
        >
          {wheel === 2 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 3 ? " active" : ""}`}
          style={{ "--i": 3 }}
        >
          {wheel === 3 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 4 ? " active" : ""}`}
          style={{ "--i": 4 }}
        >
          {wheel === 4 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 5 ? " active" : ""}`}
          style={{ "--i": 5 }}
        >
          {wheel === 5 ? "B" : null}
        </div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);

  const wheelvalue = state;

  if (typeof wheelvalue === "number") {
    console.log("The value is a number in mapStateToProps.");
  } else {
    console.log("The value is not a number in mapStateToProps.");
  }

  return {
    wheel: state.wheel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveClockwise: () => dispatch(moveClockwise()),
    moveCounterClockwise: () => dispatch(moveCounterClockwise()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wheel);
