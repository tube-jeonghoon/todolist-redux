import { v4 as uuidv4 } from "uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const CANCEL_TODO = "CANCEL_TODO";

// Action Creator
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  };
};

export const cancelTodo = (id) => {
  return {
    type: CANCEL_TODO,
    payload: id,
  };
};

// 초기값
const initialState = [
  {
    id: uuidv4(),
    title: "제목",
    content: "내용",
    isDone: false,
  },
];

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case DELETE_TODO:
      // todos.filter((todo)=>todo.id!==id);
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case DONE_TODO:
      return state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      });
    case CANCEL_TODO:
      return state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, isDone: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todosReducer;
