import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { getByDisplayValue } from "@testing-library/react";
import { createContext, useEffect, useReducer } from "react";
import todoListReducer from "../reducer/todoList-reducer";

export const TodoListContext = createContext();

export default function TodoListProvider({children}){
    const todoInit = JSON.parse(localStorage.getItem('todoList'));

    const [todoList, dispatch] = useReducer(todoListReducer, todoInit ? todoInit : []);

    const delTodo = (key) => {
        dispatch({type : 'delete', key});
    };

    const addTodo = (text, key) => {
        dispatch({type : 'add', text, key})
    };


    const checking = (checked, key) => {
        dispatch({type: 'checking', checked, key})
    }

    const data = {
        todoList,
        delTodo,
        addTodo,
        checking
    };
     
    
    return(
        <TodoListContext.Provider value={data}>{children}</TodoListContext.Provider>
    )
};
