import { connect } from "react-redux";
import { deleteToDo } from "../actions";
import ToDoList from "../components/ToDoList";

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const mapDispatchToProps = dispatch => ({
  deleteToDo: _id => dispatch(deleteToDo(_id))
});

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
