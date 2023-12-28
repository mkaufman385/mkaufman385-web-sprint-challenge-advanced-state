import React from "react";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { setQuiz, selectAnswer, setMessage } from "../state/action-creators";

export function Quiz(quiz, setQuiz, selectAnswer) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
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
    selectAnswer: () => dispatch(selectAnswer()),
    setMessage: () => dispatch(setMessage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
