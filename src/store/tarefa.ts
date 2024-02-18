import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';


export interface Tarefa {
    id: number;
    titulo?: string;
    descricao?: string;
    concluida?: boolean;
}

export interface State {
    tarefas: Tarefa[];
}

export enum ActionType {
    ADD_TAREFA="ADD_TAREFA",
    REMOVE_TAREFA="REMOVE_TAREFA",
    EDIT_TAREFA="EDIT_TAREFA"
}

const actionTypes: { [key: string]: ActionType } = {
    ADD_TAREFA: ActionType.ADD_TAREFA,
    REMOVE_TAREFA: ActionType.REMOVE_TAREFA,
    EDIT_TAREFA: ActionType.EDIT_TAREFA,
};

export interface Action {
    type: string;
    payload: Tarefa;
}

const initialState: State = {
    tarefas: [],
}

const tarefaReducer = (state: State = initialState, action: Action): State => {
    console.log(action)
    const _type: ActionType = actionTypes[action.type]

    switch (_type) {
        case ActionType.ADD_TAREFA:
            return {
                ...state, tarefas: [...state.tarefas, action.payload]
            };
        case ActionType.REMOVE_TAREFA:
            return {
                ...state, tarefas: state.tarefas
                .filter(tarefa => tarefa.id !== action.payload.id)
            };
        case ActionType.EDIT_TAREFA:
            return {
                ...state,
                tarefas: state.tarefas
                .map(tarefa => {
                    if(tarefa.id === action.payload.id)
                        return action.payload

                    return tarefa
                })
            }
        default:
            return state;
    }
}

export const tarefaStore = configureStore({
    reducer: tarefaReducer,
    preloadedState: initialState
});