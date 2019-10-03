import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, deleteToDo }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.map((toDo, index) => (
        <ToDo key={index} {...toDo} deleteToDo={deleteToDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;
