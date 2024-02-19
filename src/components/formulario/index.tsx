import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tarefa, addTarefa, editTarefa, selectIdToEdit, InitialState, selectTarefaToEdit} from '../../slices/tarefa.slice';
import { useSelector } from 'react-redux';


const Formulario: React.FC = () => {
    const [id, setId] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const dispatch = useDispatch();
    const idToEdit = useSelector(selectIdToEdit);
    const tarefa = useSelector(selectTarefaToEdit);

    useEffect(()=>{
        if(idToEdit > 0){
            console.log(tarefa?.id)
            setId(tarefa?.id as number)
            setTitulo(tarefa?.titulo as string);
            setDescricao(tarefa?.descricao as string)
        }

    }, [tarefa])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if(id > 0)
            editarTarefa()
        else
            salvarTarefa()
    
        setTitulo('');
        setDescricao('');
        setId(0)
    };

    const salvarTarefa = () => {    
        const novaTarefa: Tarefa = {
          id: Date.now(),
          titulo,
          descricao,
          concluida: false,
        };
    
        dispatch(addTarefa(novaTarefa));
    };

    const editarTarefa = () => {
        const updateTarefa: Tarefa = {
            id: tarefa?.id,
            titulo: titulo,
            descricao: descricao,
            concluida: tarefa?.concluida
        } as Tarefa;

        dispatch(editTarefa(updateTarefa));        
    }

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

                <button type="submit">{id > 0 ? 'Editar' : 'Adicionar'} Tarefa</button>
            </form>
        </>
    );
}
export default Formulario;