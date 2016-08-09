import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

//
import Home from "./pages/Home";
import List from "./pages/List";
import About from "./pages/About";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="Home" component={Home}></Route>
      <Route path="List" component={List}></Route>
      <Route path="About" component={About}></Route>
    </Route>
  </Router>,
app);
