import styles from '../css/Bottom.module.css';
import shortid from 'shortid'
import { useState } from 'react';
import { useTodo } from '../context/TodoListContext';

export default function Bottom(){
    const [text, setText] = useState('');
    const addTodo = useTodo();

    const handleClick = () => {
        setText('');

        if(text.trim().length !== 0){
            addTodo(text.split('  ').join(' '), shortid.generate());   
            return;  
        }

        alert('Todo를 입력해주세요.');
        
    }
    return(
        <div className={styles.bottom}>
            <input type="text" name="inputAdd" id="inputAdd" placeholder='Add Todo' onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={(e)=>{
                if (e.key === 'Enter') handleClick();
            }} autoComplete="off" />
            <button onClick={handleClick}>Add</button>
        </div> 
    );
};