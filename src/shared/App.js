import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </BrowserRouter>
    </>
  );
}

export default App;
