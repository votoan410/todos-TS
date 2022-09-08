import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, createTask } from "../actions/todoActions";

const Header = (): any=> {
  const [value, setValue] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const submit = () => {
    console.log("value inputted: ", value);
    const submittingValue = {
      title: value,
      completed: false,
    };
    dispatch(createTask(submittingValue));
  };

  return (
    <>
      <header className="header">
        <input
          type="text"
          id="input__box"
          name="create-task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          value="submit"
          id="input__submit"
          name="create-task"
          onClick={submit}
        >
          Submit{" "}
        </button>
      </header>
    </>
  );
};

export default Header;
