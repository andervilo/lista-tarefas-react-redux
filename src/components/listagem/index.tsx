import { useSelector } from "react-redux";
import { Tarefa } from "../../store/tarefa";
import { useDispatch } from "react-redux";
import { removeTarefa, selectTarefas } from "../../slices/tarefa.slice";

const Listagem: React.FC = () => {
    const tarefas = useSelector(selectTarefas)
    //const tarefas = useSelector(selectTarefas)
    const dispatch = useDispatch()

    const handleRemoverTarefa = (id: number) => {
        const tarefa: Tarefa = {id: id} as Tarefa
        dispatch(removeTarefa(tarefa))
    }

    return ( 
        <>
            <h3>Lista de Tarefas</h3>
            <div>
                <ul>
                    {tarefas.map((tarefa: Tarefa) =>(
                        <li key={tarefa.id}>
                            {tarefa.titulo} - {tarefa.descricao}
                            <button onClick={() => handleRemoverTarefa(tarefa.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default Listagem;