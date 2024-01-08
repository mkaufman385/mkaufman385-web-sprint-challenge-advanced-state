import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form({ form, inputChange, resetForm, postQuiz }) {
  const onChange = (evt) => {
    const { id, value } = evt.target;
    inputChange(id, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const quizPayload = {
      question: form.newQuestion,
      trueAnswer: form.newTrueAnswer,
      falseAnswer: form.newFalseAnswer,
    };

    postQuiz(quizPayload);

    resetForm();
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
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  form: state.form,
});

// export default connect((st) => st, actionCreators)(Form);

export default connect(mapStateToProps, actionCreators)(Form);
