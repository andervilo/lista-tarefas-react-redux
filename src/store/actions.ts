import { ActionType, Action, Tarefa } from "./tarefa";

export const addTarefa = (tarefa: Tarefa) => (
    {
        type: ActionType.ADD_TAREFA.toString(),
        payload: tarefa
    } 
)

export const removeTarefa = (_id: number) => (
    {
        type: ActionType.REMOVE_TAREFA.toString(),
        payload: {id: _id} as Tarefa
    } 
)

export const editTarefa = (tarefa: Tarefa) => (
    {
        type: ActionType.EDIT_TAREFA.toString(),
        payload: tarefa
    } 
)