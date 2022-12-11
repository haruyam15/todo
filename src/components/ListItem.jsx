import { useState } from 'react';
import styles from '../css/ListItem.module.css'
import { MdDelete } from "react-icons/md";
import { useTodo } from '../context/TodoListContext';

export default function ListItem({text, completed, id, del}){
    
    const [checked, setChecked] = useState(completed);
    const checking = useTodo();

    const handleCheck = () => {
        setChecked((check)=>!check);
        checking(!checked, id)
    }

    return(
        
        <li className={completed ? styles.completed : ""}>
            <div>
                <input type="checkbox" name={id} id={id} checked={checked}  onChange={handleCheck}/>
                <label htmlFor={id}>{text}</label>
            </div>
            <button onClick={()=>del(id)}><MdDelete /></button>
        </li>

    )
}