import React from "react";
import {BrowserRouter,  Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Form from "./Form/Form";

function App() {
  return (
    <BrowserRouter basename='/rocktaves'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;