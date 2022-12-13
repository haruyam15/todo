import AddTodo from './AddTodo';
import Todo from "./Todo";
import { useEffect, useState } from 'react';

export default function TodoList({tabs}){
    const style = {
        padding : '1rem 0.7rem',
        minHeight: '100px',
        maxHeight: '500px',
        overflowY: 'auto', 
        background: 'var(--color-bg-white)',
    }

    const [todoList, setTodoList] = useState(()=>getTodoList());
    const selectedTab = tabs.filter((tab) => tab.selected)[0].name;

    const addTodo = (text, id) => {
        setTodoList((todoList) => [
            ...todoList,
            {
                key:id,
                text:text,
                status:'Active'
            }
        ]);
    }

    const updateTodo = (newTodo, id)=> {
        setTodoList((todoList) => todoList.map((todo)=> todo.key === id ? newTodo : todo));
    }

    const delTodo = (id)=> {
        setTodoList((todoList) => todoList.filter((todo)=> todo.key !== id));
    }

    useEffect(()=>{
        setTodoListStorage(todoList);
    }, [todoList])

    const filtered = filtering(todoList, selectedTab);

    return (
        <>
            <ul style={style}>
                {
                    filtered.map((todo) => <Todo todo={todo} updateTodo={updateTodo} delTodo={delTodo} key={todo.key} />)
                }
            </ul>
            <AddTodo onadd={addTodo} />
        </>
    );
};

function filtering(todoList, selectedTabName){
    if(selectedTabName === 'All'){
        return todoList;
    }else{
        return todoList.filter((todo)=>todo.status === selectedTabName);
    }
    
}

function getTodoList(){
    console.log('getTodoList');
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    if(todoList){
        return todoList;
    }else{
        return [];
    }
    
};

function setTodoListStorage(todoList){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

