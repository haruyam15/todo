import { createContext, useReducer } from "react";
import todoListReducer from "../reducer/todoList-reducer";

export const TodoListContext = createContext();

export default function TodoListProvider({children}){
    const todoInit = [
        
    ];

    const [todoList, dispatch] = useReducer(todoListReducer, todoInit);

    const delTodo = (key) => {
        dispatch({type : 'delete', key});
    };

    const addTodo = (text, key) => {
        dispatch({type : 'add', text, key})
    };

    const data = {
        todoList,
        delTodo,
        addTodo
    };
     
    
    return(
        <TodoListContext.Provider value={data}>{children}</TodoListContext.Provider>
    )
};
