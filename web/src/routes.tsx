import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import TeacherForm from "./Pages/TeacherForm";
import TeacherList from "./Pages/TeacherList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
