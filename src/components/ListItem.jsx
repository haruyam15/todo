import { useState } from 'react';
import styles from '../css/ListItem.module.css'
import { MdDelete } from "react-icons/md";

export default function ListItem({text, completed, id, del}){

    const [chekced, setChecked] = useState(completed);
    
    const handleCheck = () => {
        setChecked((check)=>!check);
    }

    return(
        <li className={completed ? styles.completed : ''}>
            <div>
                <input type="checkbox" name={id} id={id} checked={chekced}  onChange={handleCheck}/>
                <label htmlFor={id}>{text}</label>
            </div>
            <button onClick={()=>del(id)}><MdDelete /></button>
        </li>
    )
}