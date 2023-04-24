// 중앙 저장소
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import todosReducer from "../modules/todosReducer";
import inputReducer from "../modules/inputReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  input: inputReducer,
});

const store = createStore(rootReducer);

export default store;
