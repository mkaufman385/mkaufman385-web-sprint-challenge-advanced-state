// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

export const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  // console.log("initial reducer state", state);
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return state < 5 ? state + 1 : 0;

    case MOVE_COUNTERCLOCKWISE:
      return state > 0 ? state - 1 : 5;

    default:
      return state;
  }
}

export const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  // return state;
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      // if (Array.isArray(action.payload)) {
      //   // Adding a new quiz to the roster
      //   return [...state, ...action.payload];
      // } else {
      //   // Setting the initial quiz
      //   return action.payload;
      // }
      // return action.payload;
      return action.payload;
    default:
      return state;
  }
}

export const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  // console.log("initial reducer state", state);
  // return state;

  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  // return state;
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;

    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  // return state;
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
