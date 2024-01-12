import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form({ form, inputChange, resetForm, postQuiz, setMessage }) {
  const onChange = (evt) => {
    const { id, value } = evt.target;
    inputChange(id, value);
  };

  const isFormValid = () => {
    return (
      form.newQuestion.trim().length > 1 &&
      form.newTrueAnswer.trim().length > 1 &&
      form.newFalseAnswer.trim().length > 1
    );
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (isFormValid()) {
      const quizPayload = {
        question_text: form.newQuestion,
        true_answer_text: form.newTrueAnswer,
        false_answer_text: form.newFalseAnswer,
      };

      postQuiz(quizPayload);
      setMessage(`Congrats: "${form.newQuestion}" is a great question!`);
      resetForm();
    } else {
      setMessage("");
    }
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
        value={form.newQuestion}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
        value={form.newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
        value={form.newFalseAnswer}
      />
      <button id="submitNewQuizBtn" disabled={!isFormValid()}>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message) => dispatch(actionCreators.setMessage(message)),
    inputChange: (field, value) =>
      dispatch(actionCreators.inputChange(field, value)),
    postQuiz: (quizPayload) => dispatch(actionCreators.postQuiz(quizPayload)),
    resetForm: () => dispatch(actionCreators.resetForm()),
  };
};

// export default connect((st) => st, actionCreators)(Form);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
