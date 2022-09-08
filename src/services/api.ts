import axios from "axios";
import {Todo, CreateTask} from "../types/types";

const url = "http://localhost:3000/todos";

// export default axios.create({
//   baseURL: "http://localhost:3000/",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

export const fetchTask = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(axios.get(url));
    }, 2000);
  });

export const createTask = (newTask: CreateTask) => axios.post(url, newTask);
export const editTask = (id: number, updateTask: CreateTask) =>
  axios.patch(`${url}/${id}`, updateTask);
export const deleteTask = (id:number) => axios.delete(`${url}/${id}`);
