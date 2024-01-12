// ❗ You don't need to add extra action creators to achieve MVP

import axios from "axios";

import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

export function moveClockwise() {
  return {
    type: MOVE_CLOCKWISE,
  };
}

export function moveCounterClockwise() {
  return {
    type: MOVE_COUNTERCLOCKWISE,
  };
}

export function selectAnswer(selectedButton) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: selectedButton,
  };
}

export function setMessage(message) {
  // console.log("message: ", message);
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function setQuiz(quizData) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quizData,
  };
}

export function inputChange(field, value) {
  return {
    type: INPUT_CHANGE,
    payload: {
      field,
      value,
    },
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));
    // dispatch(setMessage(null));

    axios
      .get("http://localhost:9000/api/quiz/next")
      .then((response) => {
        const quizData = response.data;
        dispatch(setQuiz(quizData));
        // dispatch(setMessage(""));
      })
      .catch((error) => {
        console.error("Failed to fetch next quiz:", error);
        dispatch(setMessage("Failed to fetch next quiz. Please try again."));
      });
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer(answerPayload) {
  return function (dispatch) {
    dispatch(selectAnswer(null));

    // const message = "Filler Message Here";
    // dispatch(setMessage(message));

    axios
      .post("http://localhost:9000/api/quiz/answer", answerPayload)
      .then((response) => {
        // console.log("RD", response.data.message);
        const quizData = response.data;
        dispatch(setQuiz(quizData));
        dispatch(setMessage(response.data.message));

        dispatch(fetchQuiz());
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          console.error("Malformed client payload:", error.response.data);
        } else {
          console.error("Failed to post Answer:", error);
        }
      });

    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz(quizPayload) {
  return function (dispatch) {
    axios
      .post("http://localhost:9000/api/quiz/new", quizPayload)
      .then((response) => {
        dispatch(setMessage());
        dispatch(resetForm());
        dispatch(setQuiz(response.data));
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          console.error("Malformed client payload:", error.response.data);
        }
        // else {
        //   console.error("Failed to post quiz:", error);
        // }
      });
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// dispatch(resetForm());
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
