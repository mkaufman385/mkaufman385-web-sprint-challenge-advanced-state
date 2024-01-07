import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

import {
  setQuiz,
  selectAnswer,
  setMessage,
  fetchQuiz,
  postAnswer,
  // selectedButton,
} from "../state/action-creators";

export function Quiz({
  quiz,
  // setQuiz,
  selectAnswer,
  selectedAnswer,
  // setMessage,
  fetchQuiz,
  postAnswer,
}) {
  // console.log("quiz", quiz);
  // console.log("selectedAnswer", selectedAnswer);

  useEffect(() => {
    // console.log("FETCHQUIZ: ", fetchQuiz);
    fetchQuiz();
  }, [fetchQuiz]);

  const handleAnswerClick = (button) => {
    console.log("button working");

    selectAnswer(button);
  };

  const handleQuizSubmit = () => {
    const answerPayload = {
      quiz_id: "quiz_id",
      answer_id: "answer_id",
    };

    selectAnswer(null);
    postAnswer(answerPayload);
    fetchQuiz();
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div
                className={`answer ${selectedAnswer === "0" ? "selected" : ""}`}
              >
                A function
                <button onClick={() => handleAnswerClick("0")}>
                  {selectedAnswer === "0" ? "SELECTED" : "Select"}
                </button>
              </div>

              <div
                className={`answer ${selectedAnswer === "1" ? "selected" : ""}`}
              >
                An elephant
                <button onClick={() => handleAnswerClick("1")}>
                  {selectedAnswer === "1" ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button
              id="submitAnswerBtn"
              onClick={handleQuizSubmit}
              // disabled={!isSelectionMade}
              disabled={selectedAnswer === null}
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("mapStateToProps", state);
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
    setMessage: (message) => dispatch(setMessage(message)),
    fetchQuiz: () => dispatch(fetchQuiz()),
    postAnswer: () => dispatch(postAnswer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
