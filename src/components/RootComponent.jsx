import React from "react";
import styled from "styled-components";
import Headers from "./Headers";
import TodoInputBox from "./TodoInputBox";
import TodoBox from "./TodoBox";

const StApp = styled.div`
  /* background-color: #d5ffeb; */
  margin: 1rem auto;
  max-width: 1200px;
  min-width: 800px;
`;

const RootComponent = () => {
  return (
    <StApp className="rootComponent">
      {/* -------------- Header Box -------------- */}
      <Headers />
      {/* -------------- Todo Input Box -------------- */}
      <TodoInputBox />
      {/* -------------- Todo Box -------------- */}
      <TodoBox />
    </StApp>
  );
};

export default RootComponent;
