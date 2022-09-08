import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, getTasks } from "../actions/todoActions";
import { Todo } from "../types/types";

const EditTask = ({ title, completed, id, isEdit }) => {
  const [toggleEdit, setToggleEdit] = useState(isEdit);

  useEffect(() => {
    setToggleEdit(isEdit);
  }, [isEdit]);

  const dispatch = useDispatch();

  //   // DOM structure selector
  //   const DomSelectors = {
  //     root: "task__list",
  //     taskSection: {
  //       taskContainer: "task__container",
  //       taskEntry: "task__entry",
  //       markedTaskEntry: "task__entry-marked",
  //       title: "task__title",
  //       edit: "task__edit",
  //       deleteTask: "task__delete",
  //     },
  //   };

  //   useEffect(() => {
  //     dispatch(getTasks());
  //   }, [dispatch]);

  const styleLined = { textDecoration: "line-through", cursor: "grab" };
  const styleWOLined = { cursor: "grab" };

  const markClick = (title, completed, id) => {
    const newTask = {
      title: title,
      completed: !completed,
    };
    dispatch(updateTask(id, newTask));
  };

  const editSubmit = (id, newValue, completed) => {
    const submittingValue = {
      title: newValue,
      completed: completed,
    };
    setToggleEdit({
      enable: !toggleEdit.enable,
      id: "reset",
    });
    dispatch(updateTask(id, submittingValue));
  };

  return (
    <>
      <div
        className="task__title"
        style={completed ? styleLined : styleWOLined}
        id={`div-${id}`}
      >
        {toggleEdit.id == id && toggleEdit.enable && !completed ? (
          <input
            type="text"
            id="input__box-edit-${id}"
            name="create-task"
            placeholder={title}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                editSubmit(id, e.target.value, completed);
              }
            }}
          />
        ) : (
          <h3
            id={`title-click-${id}`}
            style={{ cursor: "grab" }}
            onClick={() => markClick(title, completed, id)}
          >
            {title}
          </h3>
        )}
      </div>
    </>
  );
};

export default EditTask;
