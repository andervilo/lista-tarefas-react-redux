import { useSelector } from "react-redux";
import { State, Tarefa } from "../../store/tarefa";
import { useDispatch } from "react-redux";
import { removeTarefa } from "../../store/actions";

const Listagem: React.FC = () => {
    const tarefas = useSelector((state: State) => state.tarefas)
    const dispatch = useDispatch()

    const handleRemoverTarefa = (id: number) => {
        dispatch(removeTarefa(id))
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