import React from "react";
import PropTypes from "prop-types";

const AddMessage = props => {
  let input;

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.dispatch(input.value, "Me");
      input.value = "";
    }
  };

  return (
    <section id="new-message">
      <input
        onKeyPress={handleKeyPress}
        type="text"
        ref={node => (input = node)}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default AddMessage;
