import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { getByDisplayValue } from "@testing-library/react";
import { createContext, useReducer, useState, useEffect } from "react";
import todoListReducer from "../reducer/todoList-reducer";

export const TodoListContext = createContext();

export default function TodoListProvider({children}){

    const [todoList, dispatch] = useReducer(todoListReducer, getTodoList());
    const [tabs, setTabs] = useState(getTabs());

    useEffect(() => {
        localStorage.setItem('tabs', JSON.stringify(tabs));
    }, [tabs]);

    const delTodo = (key) => {
        dispatch({type : 'delete', key});
    };
    const addTodo = (text, key) => {
        dispatch({type : 'add', text, key})
    };
    const checking = (checked, key) => {
        dispatch({type: 'checking', checked, key})
    }
    const setTab = (name) => {
        setTabs((tabs) => {
            return tabs.map((tab) => {
                if(tab.name === name){
                    return ({
                        ...tab,
                        selected : true
                    })
                }
                return ({
                    ...tab,
                    selected : false
                })
            });
        })
    }

    const data = {
        todoList,
        delTodo,
        addTodo,
        checking,
        setTab,
        tabs
    };

    function getTodoList(){
        const todoList = JSON.parse(localStorage.getItem('todoList'))
        if(todoList){
            return todoList;
        }
        return [];
    };

    function getTabs(){
        const tabs = JSON.parse(localStorage.getItem('tabs'));
        if(tabs){
            return tabs;
        };
        return [
            {
                name : 'All',
                selected :true
            },
            {
                name : 'Active',
                selected :false
            },
            {
                name : 'Completed',
                selected :false
            },
        ];
    };
     
    return(
        <TodoListContext.Provider value={data}>{children}</TodoListContext.Provider>
    )
};
