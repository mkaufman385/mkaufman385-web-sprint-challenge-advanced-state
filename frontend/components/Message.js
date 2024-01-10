import React from "react";
import { connect } from "react-redux";
import { setMessage } from "../state/action-creators";

export function Message({ infoMessage }) {
  const displayMessage = typeof infoMessage === "string" ? infoMessage : "";
  return <div id="message">{displayMessage}</div>;
  // return <div id="message">{infoMessage}</div>;
}

const mapStateToProps = (state) => ({
  // infoMessage: state.infoMessage.infoMessage,
  infoMessage: state.infoMessage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message) => dispatch(setMessage(message)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Message);

export default connect(mapStateToProps, mapDispatchToProps)(Message);
