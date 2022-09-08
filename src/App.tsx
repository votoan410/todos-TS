import React, { useState, useEffect } from "react";
import Header from "./components/header";
import TaskList from "./components/taskList";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./actions/todoActions";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTasks());
  // }, [ ]);

  return (
    <>
      <Header />
      <div className="task__list">
        <TaskList />
      </div>
    </>
  );
};

export default App;
