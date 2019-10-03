// Action Type
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const LOAD_TODO_LIST = "LOAD_TODO_LIST";
export const RENDER_TODO_LIST = "RENDER_TODO_LIST";

// Action Function
export const addToDo = title => {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime().toString(),
      title
    }
  };
};

export const deleteToDo = _id => {
  console.log("action: ", _id);
  return {
    type: DELETE_TODO,
    _id
  };
};

export const loadToDoList = () => {
  return {
    type: LOAD_TODO_LIST
  };
};
