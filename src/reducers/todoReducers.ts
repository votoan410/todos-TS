import TODO_ACTIONS_TYPES from "../actions/actionTypes";
import { Todo, TodosAction } from "../types/types";

export default (tasks: Todo[] = [], action:TodosAction) => {
  switch (action.type) {
    case TODO_ACTIONS_TYPES.FETCH_TODO:
      return action.payload;
    case TODO_ACTIONS_TYPES.CREATE_TODO:
      return [...tasks, action.payload];
    case TODO_ACTIONS_TYPES.UPDATE_TODO:
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case TODO_ACTIONS_TYPES.DELETE_TODO:
      return tasks.filter((task) => task.id !== action.payload.id);
    default:
      return tasks;
  }
};
