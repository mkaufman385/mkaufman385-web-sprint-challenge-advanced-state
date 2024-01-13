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
  setQuiz,
  selectAnswer,
  selectedAnswer,
  setMessage,
  fetchQuiz,
  postAnswer,
}) {
  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }

    return () => {
      if (
        selectedAnswer !== null &&
        selectedAnswer !== quiz?.answers[0]?.answer_id &&
        selectedAnswer !== quiz?.answers[1]?.answer_id
      ) {
        selectAnswer(selectedAnswer);
      }
    };
  }, [fetchQuiz, quiz, selectedAnswer, selectAnswer]);

  const handleAnswerClick = (button) => {
    selectAnswer(button);
    // setMessage("");
  };

  const handleQuizSubmit = () => {
    const isCorrect = selectedAnswer === quiz.answers[0].answer_id;

    const answerPayload = {
      quiz_id: quiz.quiz_id,
      answer_id: selectedAnswer,
    };

    selectAnswer(null);
    postAnswer(answerPayload);
    fetchQuiz();

    if (isCorrect) {
      setMessage("Nice job! That was the correct answer");
    } else {
      setMessage("What a shame! That was the incorrect answer");
    }
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div
                className={`answer ${
                  selectedAnswer === quiz.answers[0].answer_id ? "selected" : ""
                }`}
              >
                {quiz.answers[0].text}
                <button
                  onClick={() => handleAnswerClick(quiz.answers[0].answer_id)}
                >
                  {selectedAnswer === quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div
                className={`answer ${
                  selectedAnswer === quiz.answers[1].answer_id ? "selected" : ""
                }`}
              >
                {quiz.answers[1].text}
                <button
                  onClick={() => handleAnswerClick(quiz.answers[1].answer_id)}
                >
                  {selectedAnswer === quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
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
    postAnswer: (answerPayload) => dispatch(postAnswer(answerPayload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
