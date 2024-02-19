import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { 
    Tarefa, 
    removeTarefa, 
    selectTarefas,
    setIdToEdit
 } from "../../slices/tarefa.slice";
import Formulario from "../formulario";

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
            <Formulario  />
            <h3>Lista de Tarefas</h3>
            <div>
                <ul>
                    {tarefas.map((tarefa: Tarefa) =>(
                        <li key={tarefa.id}>
                            {tarefa.titulo} - {tarefa.descricao}
                            <button onClick={() => dispatch(setIdToEdit(tarefa))}>Editar</button>
                            <button onClick={() => handleRemoverTarefa(tarefa.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default Listagem;