import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  // 내가 이동한 URL 주소 가져오기
  const { id } = useParams();
  // todos의 내용(todos과 내가 이동한 URL(id) 일치한(find) 항목을 todo에 넣기
  const todo = todos.find((item) => {
    return item.id === id;
  });

  const navigate = useNavigate();

  return (
    <StDetail>
      <StCardBox className="cardBox">
        <StCardBoxHeader className="cardBoxHeader">
          <StBackButton onClick={() => navigate("/")}>Back</StBackButton>
        </StCardBoxHeader>
        <StCardBoxConetent className="cardBoxConetent">
          <h2>{todo.title}</h2>
          <div>{todo.content}</div>
        </StCardBoxConetent>
      </StCardBox>
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  /* display: flex; */
  height: 100%;
  width: 100%;
`;

const StCardBox = styled.div`
  display: relative;
  border: 1px solid #bababa;
  border-radius: 15px;
  width: 550px;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 350px;
  text-align: center;
`;

const StCardBoxHeader = styled.div`
  /* float: left; */
  text-align: right;
`;

const StCardBoxConetent = styled.div`
  text-align: left;
  margin-left: 1.5rem;
`;

const StBackButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #ffc7c3;
  border-radius: 0.6em;
  color: #ff5448;
  cursor: pointer;
  align-self: center;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  margin: 15px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #ff5448 inset;
  }
`;
