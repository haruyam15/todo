import styles from '../css/AddTodo.module.css';
import shortid from 'shortid'
import { useState } from 'react';

export default function AddTodo({onadd}){
    const [text, setText] = useState('');

    const handleClick = () => {
        setText('');

        if(text.trim().length !== 0){
            onadd(text.split('  ').join(' '), shortid.generate())
            return;  
        }

        alert('Todo를 입력해주세요.');
        
    }
    return(
        <div className={styles.addTodo}>
            <input type="text" name="inputAdd" id="inputAdd" placeholder='Add Todo' onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={(e)=>{
                if (e.key === 'Enter') handleClick();
            }} autoComplete="off" />
            <button onClick={handleClick}>Add</button>
        </div> 
    );
};