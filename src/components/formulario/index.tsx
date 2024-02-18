import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tarefa } from '../../store/tarefa';
import { addTarefa } from '../../slices/tarefa.slice';

const Formulario: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const novaTarefa: Tarefa = {
          id: Date.now(),
          titulo,
          descricao,
          concluida: false,
        };
    
        dispatch(addTarefa(novaTarefa));
    
        setTitulo('');
        setDescricao('');
      };

    return (
        <>
            <h2>Formulário</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Digite o título da tarefa"
                />

                <label htmlFor="descricao">Descrição:</label>
                <textarea
                    id="descricao"
                    name="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Digite a descrição da tarefa"
                />

                <button type="submit">Adicionar Tarefa</button>
            </form>
        </>
    );
}
export default Formulario;