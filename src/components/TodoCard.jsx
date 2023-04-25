import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  cancelTodo,
  deleteTodo,
  doneTodo,
} from "../redux/modules/todosReducer";
import { Link } from "react-router-dom";
// import confetti from "https://esm.run/canvas-confetti@1";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const clickRemoveButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  const clickDoneButton = () => {
    dispatch(doneTodo(todo.id));
    // confetti({
    //   particleCount: 120,
    //   spread: 200,
    // });
  };

  const clickCancelButton = () => {
    dispatch(cancelTodo(todo.id));
  };

  return todo.isDone === false ? (
    <StWorkingList className="workingList">
      <StContentsBox className="contentsBox">
        {/* ----- 리액트 라우터 추가 구문 -----*/}
        <StLink>
          <StLinkButton to={`/${todo.id}`}>+</StLinkButton>
        </StLink>
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
            <StCompleteBtn className="btn" onClick={clickDoneButton}>
              완료
            </StCompleteBtn>
          </div>
        </StRemoveCancelBoxArea>
      </StContentsBox>
    </StWorkingList>
  ) : (
    <StDoneList className="doneList">
      <StContentsBox>
        <div className="contentsBox">
          {/* ----- 리액트 라우터 추가 구문 -----*/}
          <StLink>
            <StLinkButton to={`/${todo.id}`}>+</StLinkButton>
          </StLink>
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
            <StCancelBtn className="btn" onClick={clickCancelButton}>
              취소
            </StCancelBtn>
          </div>
        </StRemoveCancelBoxArea>
      </StContentsBox>
    </StDoneList>
  );
};

export default TodoCard;

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

const StCompleteBtn = styled.button`
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
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #2fc601 inset;
  }
`;

const StCancelBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #ffaa32;
  border-radius: 0.6em;
  color: #ffaa32;
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
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #ffaa32 inset;
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
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #ff4f4f;
  border-radius: 0.6em;
  color: #ff4f4f;
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
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #ff4f4f inset;
  }
`;

const StLink = styled.div`
  margin: 15px;
  /* background-color: gray; */
`;

const StLinkButton = styled(Link)`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #c9ceff;
  border-radius: 0.6em;
  color: #c9ceff;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  padding: 0.6rem 8rem;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #c9ceff inset;
  }
`;
