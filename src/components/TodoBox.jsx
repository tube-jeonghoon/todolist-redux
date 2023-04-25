import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoBox = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="TodoBox">
      {/* -------------- Working zone -------------- */}
      <h2>Working~🔥</h2>
      <StWorkingZone className="workingZone">
        {/* -------------- Working list -------------- */}

        {todos
          .filter((item) => {
            return item.isDone === false;
          })
          .map((item) => {
            return <TodoCard todo={item} key={item.id} />;
          })}
      </StWorkingZone>
      {/* -------------- Done Zone -------------- */}
      <h2>Done~⚡️</h2>
      <StDoneZone className="doneZone">
        {/* -------------- Done List -------------- */}
        {todos
          .filter((item) => item.isDone === true)
          .map((item) => {
            return <TodoCard todo={item} key={item.id} />;
          })}
      </StDoneZone>
    </div>
  );
};

export default TodoBox;

const StWorkingZone = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 5px;
`;

const StDoneZone = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 5px;
`;
