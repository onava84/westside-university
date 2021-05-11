import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/about" component={About} />
    <Route path="/student/:id" component={Student} />
  </Switch>
);

export default routes;
