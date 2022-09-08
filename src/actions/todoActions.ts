import * as api from "../services/api";
import TODO_ACTIONS_TYPES from "./actionTypes";
import { Todo } from "../types/types";
// Action Creators

  

export const getTasks = () => async (dispatch : any) => {
  try {
    const { data } : any= await api.fetchTask();
    // console.log("fetched data: ", data);
    // const action = { type: "FETCH_ALL", payload: data };
    dispatch({ type: TODO_ACTIONS_TYPES.FETCH_TODO, payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const createTask = (task : any ) => async (dispatch : any) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: TODO_ACTIONS_TYPES.CREATE_TODO, payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const updateTask = (id: number, task: Todo) => async (dispatch: any) => {
  try {
    const { data } = await api.editTask(id, task);
    dispatch({ type: TODO_ACTIONS_TYPES.UPDATE_TODO, payload: data });
  } catch (error : any) {
    console.log(error.message );
  }
};

// async await will return a promise
export const deleteTask = (id: number) => async (dispatch: any) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: TODO_ACTIONS_TYPES.DELETE_TODO, payload: id });
  } catch (error: any) {
    console.log(error.message);
  }
};
