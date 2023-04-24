// Action Value
const INPUT_CHANGE = "INPUT_CHANGE";
const RESET_INPUT = "RESET_INPUT";

// Action Creator
export const inputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: {
      name,
      value,
      isDone: false,
    },
  };
};

export const resetInputBox = () => {
  return {
    type: RESET_INPUT,
  };
};

// 초기값
const initialState = {
  title: "",
  content: "",
  isDone: false,
};
// Reducer
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case RESET_INPUT:
      return initialState;
    default:
      return state;
  }
};

export default inputReducer;
