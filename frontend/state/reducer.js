// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
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

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  // return state;
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  // return state;
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        state: action.payload,
      };
    // const newState = { ...state, state: action.payload };

    // if (newState !== state) {
    //   return newState;
    // }
    // break;

    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  // return state;
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return {
        ...state,
      };
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
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
