import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { setQuiz, selectAnswer, setMessage } from "../state/action-creators";

export function Quiz({ quiz, setQuiz, selectAnswer, setMessage }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleAnswerClick = (button) => {
    console.log("button working");
    setSelectedButton(button);

    selectAnswer(button);
    // console.log("Payload", payload);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        { quiz } ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div
                className={`answer ${selectedButton === "A" ? "selected" : ""}`}
              >
                A function
                <button onClick={() => handleAnswerClick("A")}>
                  {selectedButton === "A" ? "SELECTED" : "Select"}
                </button>
              </div>

              <div
                className={`answer ${selectedButton === "B" ? "selected" : ""}`}
              >
                An elephant
                <button onClick={() => handleAnswerClick("B")}>
                  {selectedButton === "B" ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuiz: () => dispatch(setQuiz()),
    selectAnswer: (selectedButton) => dispatch(selectAnswer(selectedButton)),
    setMessage: () => dispatch(setMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
