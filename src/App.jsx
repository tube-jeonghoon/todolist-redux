import "./App.css";
import styled from "styled-components";
import Headers from "./components/Headers";
import TodoInputBox from "./components/TodoInputBox";
import TodoBox from "./components/TodoBox";

const StApp = styled.div`
  /* background-color: #d5ffeb; */
  margin: 1rem auto;
  max-width: 1200px;
  min-width: 800px;
`;

function App() {
  return (
    <StApp className="app">
      {/* -------------- Header Box -------------- */}
      <Headers />
      {/* -------------- Todo Input Box -------------- */}
      <TodoInputBox />
      {/* -------------- Todo Box -------------- */}
      <TodoBox />
    </StApp>
  );
}

export default App;
