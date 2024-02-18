import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Action, Tarefa } from "../store/tarefa";

const initialState: Tarefa[] = []

const tarefaSlice = createSlice({
    name: 'tarefas',
    initialState: initialState,
    reducers: {
        addTarefa(state, action: Action) {
            state.push(action.payload)
        },
        removeTarefa(state, action: Action){
            return state.filter(tarefa => tarefa.id !== action.payload.id)
        },
        editTarefa(state, action: Action) {
            state = state.map(tarefa => {
                        if(tarefa.id === action.payload.id)
                            return action.payload

                        return tarefa
                    })
        }

    }
})

export const {addTarefa, removeTarefa, editTarefa} = tarefaSlice.actions

export const selectTarefas = createSelector(
    (state: any) => state.tarefas,
    (tarefas: Tarefa[]) => tarefas,
  );

export default tarefaSlice.reducer