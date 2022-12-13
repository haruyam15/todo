import styles from '../css/Todo.module.css'
import { MdDelete } from "react-icons/md";

export default function Todo({todo, updateTodo, delTodo}){
    const {text, status, key} = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'Completed' : 'Active';
        updateTodo({...todo, status}, key)
    }
    

    return(
        
        <li className={status === "Completed" ? styles.completed : ""}>
            <div>
                <input type="checkbox" name={key} id={key} checked={status === 'Completed'}  onChange={handleChange}/>
                <label htmlFor={key}>{text}</label>
            </div>
            <button onClick={()=>delTodo(key)}><MdDelete /></button>
        </li>

    )
}