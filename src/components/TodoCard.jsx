import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  cancelTodo,
  deleteTodo,
  doneTodo,
} from "../redux/modules/todosReducer";

const StWorkingList = styled.div``;

const StContentsBox = styled.div`
  white-space: pre-wrap;
  border: solid 1px #8b8687;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;

  .card {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 5px;
  }
`;

const StBtn = styled.button`
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
  background: #8b8687;
  &:hover {
    background-color: #3a5134;
    color: white;
  }
`;

const StRemoveCancelBoxArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin-left: 1rem;
`;

const StDoneList = styled.div`
  white-space: pre-wrap;
`;

const StRemoveBtn = styled.button`
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
  background: #8b8687;
  &:hover {
    background-color: #ff1140;
    color: white;
  }
`;

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const clickRemoveButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  const clickDoneButton = () => {
    dispatch(doneTodo(todo.id));
  };

  const clickCancelButton = () => {
    dispatch(cancelTodo(todo.id));
  };

  return todo.isDone === false ? (
    <StWorkingList className="workingList">
      <StContentsBox className="contentsBox">
        <div className="detail">상세보기</div>
        <div className="card">
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
        </div>
        <StRemoveCancelBoxArea>
          <div className="removeBox">
            <StRemoveBtn className="btn" onClick={clickRemoveButton}>
              삭제
            </StRemoveBtn>
          </div>
          <div className="doneBox">
            <StBtn className="btn" onClick={clickDoneButton}>
              완료
            </StBtn>
          </div>
        </StRemoveCancelBoxArea>
      </StContentsBox>
    </StWorkingList>
  ) : (
    <StDoneList className="doneList">
      <StContentsBox>
        <div className="contentsBox">
          <div className="card">
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
          </div>
        </div>
        <StRemoveCancelBoxArea className="removeCancelBoxArea">
          <div className="removeBox">
            <StRemoveBtn className="btn" onClick={clickRemoveButton}>
              삭제
            </StRemoveBtn>
          </div>
          <div className="cancelBox">
            <StBtn className="btn" onClick={clickCancelButton}>
              취소
            </StBtn>
          </div>
        </StRemoveCancelBoxArea>
      </StContentsBox>
    </StDoneList>
  );
};

export default TodoCard;
