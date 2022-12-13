import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { getByDisplayValue } from "@testing-library/react";
import { createContext, useReducer, useState, useEffect, useContext } from "react";
import todoListReducer from "../reducer/todoList-reducer";

const TodoListContext = createContext();

export default function TodoListProvider({children}){

    const [todoList, dispatch] = useReducer(todoListReducer, getTodoList());
    const [tabs, setTabs] = useState(getTabs); 
    //getTabs()로 전달하게되면 상태가 업데이트 될때마다 계속 호출함
    //useState(()=>getTabs())처럼 한번 감싸서 전달하면 한번만 호출
    //인자와 호출하는 내용이 동일하다면 함수의 이름(참조값)만 전달해도 되므로 getTabs로 전달
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) ? JSON.parse(localStorage.getItem('darkMode')) : false);

    const darkModeToggle = () => {
        setDarkMode((mode)=> !mode);
    }

    useEffect(() => {
        localStorage.setItem('tabs', JSON.stringify(tabs));
    }, [tabs]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if(darkMode){
            document.documentElement.classList.add('darkMode')
        }else{
            document.documentElement.classList.remove('darkMode')
        }
        
    }, [darkMode]);

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
        tabs,
        darkMode,
        darkModeToggle
    };

    function getTodoList(){
        console.log('getTodoList');
        const todoList = JSON.parse(localStorage.getItem('todoList'))
        if(todoList){
            return todoList;
        }else{
            return [];
        }
        
    };

    function getTabs(){
        console.log('getTabs');
        const tabs = JSON.parse(localStorage.getItem('tabs'));
        if(tabs){
            return tabs;
        }else{
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
        }
        
    };
     
    return(
        <TodoListContext.Provider value={data}>{children}</TodoListContext.Provider>
    )
};


export const useTodo = () => useContext(TodoListContext);
