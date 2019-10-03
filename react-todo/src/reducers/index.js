import produce from "immer";

import { ADD_TODO, DELETE_TODO, RENDER_TODO_LIST } from "../actions";

// Set initialState
const initialState = {
  toDoList: []
};

// Reducer
const toDoApp = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return produce(state, draft => {
        draft.toDoList = action.toDoList;
      });
    case ADD_TODO:
      return produce(state, draft => {
        draft.toDoList.push(action.toDoItem);
      });
    case DELETE_TODO:
      console.log("reducer: ", action._id);
      return produce(state, draft => {
        draft.toDoList.splice(
          draft.toDoList.findIndex(todo => todo._id === action._id),
          1
        );
      });
    default:
      return state;
  }
};

export default toDoApp;
