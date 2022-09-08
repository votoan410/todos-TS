export interface Todo{
    id: number,
    title: string,
    completed: boolean,
 }

 export interface CreateTask {
    title: string,
    completed: boolean
 }

export interface TodosAction {
    type: string,
    payload: Todo
}

export interface TodosEdit {
    title: string
    id: any,
    completed: Boolean,
    isEdit: boolean
}

 