import React, { useState, useEffect } from "react";
import http from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, updateTask } from "../actions/todoActions";
import Parser from "html-react-parser";
import EditTask from "./editTask";

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState(null);
  const [editMode, setEditMode] = useState({ enable: false, id: "" });
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  //   function() {
  //   return inside_function( // this return will return the value to function()
  //     return ... // this return will return value to the inside_function()
  //   )
  // }
  // => In conclusion, the return keyword only return the value to the function they are bounded to not even the parent function
  const sortTasks = (taskList) => {
    return taskList.sort(function (x, y) {
      return x.completed === y.completed ? 0 : x.completed ? 1 : -1;
    });
  };

  useEffect(() => {
    console.log("current task list: ", tasks);
    const newSortedArr = sortTasks(tasks);
    setTodos(newSortedArr);
  }, [tasks]);
  // const getTask = () => {
  //   http.get(endpoint).then((res) => {
  //     setState(res);
  //   });
  // };

  // useEffect(() => {
  //   getTask();
  // }, []);

  // DOM structure selector
  const DomSelectors = {
    root: "task__list",
    taskSection: {
      taskContainer: "task__container",
      taskEntry: "task__entry",
      markedTaskEntry: "task__entry-marked",
      title: "task__title",
      edit: "task__edit",
      deleteTask: "task__delete",
    },
  };

  // action is an object = {type , payload}
  // reducer function => new state depending on the action type and previous state
  // dispatch take in the action object and send it to the reducer to update the store state
  const deleteClick = (id) => {
    if (id) {
      const trimmedId = id?.substring(11);
      console.log("delete clicked: ", trimmedId);
      dispatch(deleteTask(trimmedId));
    }
  };

  return todos.length > 1 ? (
    todos.map((task) => {
      return (
        <>
          <section className={DomSelectors.taskSection.taskEntry}>
            <EditTask
              title={task.title}
              completed={task.completed}
              id={task.id}
              isEdit={editMode}
            />
            {!task.completed ? (
              <div
                className={DomSelectors.taskSection.edit}
                // style={task.completed ? "display: none" : null}
                id={`btn-edit-${task.id}`}
                onClick={(event) => {
                  console.log(
                    "edit clicked: ",
                    typeof event.target.id.substring(9)
                  );
                  // editClick(event.target.id.substring(9));
                  setEditMode({
                    enable: !editMode.enable,
                    id: event.target.id.substring(9),
                  });
                }}
              >
                {/* substring(9) for edit */}
                <svg
                  id={`btn-edit-${task.id}`}
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="EditIcon"
                  aria-label="fontSize small"
                >
                  <path
                    id={`btn-edit-${task.id}`}
                    fill="#ffffff"
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959
                        0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  ></path>
                </svg>
              </div>
            ) : null}
            {!task.completed ? (
              <div
                className={DomSelectors.taskSection.deleteTask}
                id={`btn-delete-${task.id}`}
                onClick={(event) => {
                  deleteClick(event.target.id);
                }}
              >
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="DeleteIcon"
                  aria-label="fontSize small"
                >
                  <path
                    id={`btn-delete-${task.id}`}
                    fill="#ffffff"
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  ></path>
                </svg>
              </div>
            ) : null}
          </section>
        </>
      );
    })
  ) : (
    <>... Loading Todo Lists</>
  );
};

export default TaskList;
