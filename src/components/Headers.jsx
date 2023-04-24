import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px black solid;
  border-radius: 10px;
`;

const Headers = () => {
  return (
    <StHeader className="Headers">
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
};

export default Headers;
