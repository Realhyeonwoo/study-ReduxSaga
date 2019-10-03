import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ToDo = ({ _id, title, deleteToDo }) => {
  const handleDeleteToDo = _id => {
    console.log(title, _id);
    deleteToDo(_id);
  };
  return (
    <ListGroup.Item>
      <Button onClick={() => handleDeleteToDo(_id)}>삭제</Button>
      &nbsp; &nbsp;
      {title}
    </ListGroup.Item>
  );
};

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  deleteToDo: PropTypes.func
};

export default ToDo;
