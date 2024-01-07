import React from "react";
import { connect } from "react-redux";
import { setMessage } from "../state/action-creators";

export function Message({ infoMessage }) {
  return <div id="message">{infoMessage}</div>;
}

const mapStateToProps = (state) => ({
  message: state.infoMessage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message) => dispatch(setMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
