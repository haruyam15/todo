import styles from '../css/Bottom.module.css';
import shortid from 'shortid'
import { useContext, useState } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export default function Bottom(){
    const [text, setText] = useState('');
    const addTodo = useContext(TodoListContext).addTodo;

    const handleClick = () => {
        addTodo(text, shortid.generate());
        setText('')
    }
    return(
        <div className={styles.bottom}>
            <input type="text" name="inputAdd" id="inputAdd" placeholder='Add Todo' onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={(e)=>{
                if (e.key === 'Enter') handleClick();
            }} />
            <button onClick={handleClick}>Add</button>
        </div> 
    );
};