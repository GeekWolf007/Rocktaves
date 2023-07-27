import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./Components/LandingPage";
import Form from "./Form/Form";

function App() {

  const history = createBrowserHistory({ basename: '/rocktaves' });

  return (
    <Routes history={history}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}

export default App;