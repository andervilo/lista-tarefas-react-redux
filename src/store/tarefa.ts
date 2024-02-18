import {configureStore } from '@reduxjs/toolkit';
import tarefaSlice from '../slices/tarefa.slice';

export interface Tarefa {
    id: number;
    titulo?: string;
    descricao?: string;
    concluida?: boolean;
}

export interface Action {
    type: string;
    payload: Tarefa;
}

export const tarefaStore = configureStore({
    reducer: {
        tarefas: tarefaSlice
    }
});