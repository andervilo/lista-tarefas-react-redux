import {configureStore } from '@reduxjs/toolkit';
import tarefaSlice, { Tarefa } from '../slices/tarefa.slice';

export interface Action {
    type: string;
    payload: Tarefa;
}

export const tarefaStore = configureStore({
    reducer: {
        tarefas: tarefaSlice
    }
});

export type RootState = ReturnType<typeof tarefaStore.getState>