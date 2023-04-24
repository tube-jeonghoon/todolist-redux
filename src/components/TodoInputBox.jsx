import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { inputChange, resetInputBox } from "../redux/modules/inputReducer";
import { addTodo } from "../redux/modules/todosReducer";
import { v4 as uuidv4 } from "uuid";

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

const StInputBox = styled.input`
  width: 300px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 1rem;
  background-color: #e3e3e3;
`;

const StAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  float: left;
  width: 120px;
  height: 40px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  background: #333030;
  &:hover {
    background-color: #ff3636;
    color: white;
  }
`;

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
          <StInputBox
            name="title"
            value={input.title}
            onChange={inputChangeHandler}
          />
        </StTitleBox>
        {/* -------------- Content Input Box -------------- */}
        <StContentBox className="contentBox">
          <StInputBox
            name="content"
            value={input.content}
            onChange={inputChangeHandler}
          />
        </StContentBox>
        {/* -------------- Add Button -------------- */}
        <StAddButton onClick={clickAddButton}> 추가하기 </StAddButton>
      </StTodoInputBox>
    </div>
  );
};

export default TodoInputBox;
