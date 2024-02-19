import { createSlice } from "@reduxjs/toolkit";
import { Action, RootState  } from "../store/tarefa";

export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
}

export interface InitialState {
    tarefas: Tarefa[];
    idToEdit: number;
    tarefaToEdit: Tarefa | undefined;
  }
  
  const initialState: InitialState = {
    tarefas: [],
    idToEdit: 0,
    tarefaToEdit: {} as Tarefa | undefined
  };

const tarefaSlice = createSlice({
    name: 'tarefas',
    initialState: initialState,
    reducers: {
        addTarefa(state, action: Action) {
            state.tarefas.push(action.payload)
        },
        removeTarefa(state, action: Action){
            state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== action.payload.id)
        },
        editTarefa(state, action: Action) {
            const index = state.tarefas.findIndex((tarefa) => tarefa.id === action.payload.id);
            if (index !== -1) {
              state.tarefas[index] = action.payload;
              state.idToEdit = 0; // Reset idToEdit after successful edit
            }
        },
        setIdToEdit(state, action: Action) {
            state.idToEdit = action.payload.id;
            state.tarefaToEdit = state.tarefas.find((t: Tarefa)=> t.id === state.idToEdit)
        }

    }
})

export const {addTarefa, removeTarefa, editTarefa, setIdToEdit } = tarefaSlice.actions

export const selectTarefas = (state: RootState) => state.tarefas.tarefas

export const selectTarefaById = (state: RootState, id: number) => state.tarefas.tarefas.find((t: Tarefa)=> t.id === id)

export const selectTarefaToEdit = (state: RootState) => state.tarefas.tarefaToEdit

export const selectIdToEdit = (state: RootState) => state.tarefas.idToEdit;

export default tarefaSlice.reducer