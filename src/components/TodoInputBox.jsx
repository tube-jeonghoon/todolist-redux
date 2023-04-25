import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { inputChange, resetInputBox } from "../redux/modules/inputReducer";
import { addTodo } from "../redux/modules/todosReducer";
import { v4 as uuidv4 } from "uuid";

const TodoInputBox = () => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  // inputHandler
  const inputChangeHandler = (e) => {
    dispatch(inputChange(e.target.name, e.target.value));
  };

  // 추가하기 function
  const clickAddButton = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: input.title,
        content: input.content,
        isDone: false,
      })
    );
    dispatch(resetInputBox());
  };

  return (
    <div className="TodoInputBox">
      <StTodoInputBox className="todoInputBox">
        {/* -------------- Title Input Box -------------- */}
        <StTitleBox className="titleBox">
          <StInputTitleBox
            name="title"
            value={input.title}
            onChange={inputChangeHandler}
            placeholder="Title"
          />
        </StTitleBox>
        {/* -------------- Content Input Box -------------- */}
        <StContentBox className="contentBox">
          <StInputContentBox
            name="content"
            value={input.content}
            onChange={inputChangeHandler}
            placeholder="Content"
          />
        </StContentBox>
        {/* -------------- Add Button -------------- */}
        <StAddButton onClick={clickAddButton}> 추가하기 </StAddButton>
      </StTodoInputBox>
    </div>
  );
};

export default TodoInputBox;

const StTodoInputBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StTitleBox = styled.div`
  padding: 15px;
`;

const StContentBox = styled.div`
  padding: 15px;
`;

const StInputTitleBox = styled.input`
  width: 400px;
  height: 45px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 1rem;
  background-color: #e3e3e3;
`;

const StInputContentBox = styled.input`
  width: 400px;
  height: 45px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 1rem;
  background-color: #e3e3e3;
`;

const StAddButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #2fc601;
  border-radius: 0.6em;
  color: #2fc601;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  margin: 15px;
  padding: 1em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #2fc601 inset;
  }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;
