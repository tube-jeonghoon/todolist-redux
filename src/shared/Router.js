import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootComponent from "../components/RootComponent";
import Detail from "../components/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootComponent />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
