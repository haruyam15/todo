
import { useContext } from "react";
import ListItem from "./ListItem";
import { TodoListContext } from "../context/TodoListContext";


export default function Content(){

    const {todoList, delTodo, tabs, darkMode} = useContext(TodoListContext);
    const selectedTab = tabs.filter((tab) => tab.selected)[0].name;

    const style = ()=> {
        if(darkMode){
            return ({
                padding : '1rem 0.7rem',
                minHeight: '200px',
                background: '#333'
            })
        }
        return ({
            padding : '1rem 0.7rem',
            minHeight: '200px',
            background: '#fff'
        })
    }

    switch (selectedTab) {
        case "All" : {
            return(
                <ul style={style()}>
                    {
                        todoList.map((todo) => 
                            <ListItem key={todo.key} text={todo.text} completed={todo.completed} id={todo.key} del={delTodo} />
                        )
                    }
                </ul>
            )
        } 

        case "Active" : {
            return(
                <ul style={style()}>
                    {
                        todoList.filter((todo) => todo.completed === false).map((todo) => 
                            <ListItem key={todo.key} text={todo.text} completed={todo.completed} id={todo.key} del={delTodo} />
                        )
                    }
                </ul>
            )
        }

        case "Completed" : {
            return(
                <ul style={style()}>
                    {
                        todoList.filter((todo) => todo.completed === true).map((todo) => 
                            <ListItem key={todo.key} text={todo.text} completed={todo.completed} id={todo.key} del={delTodo} />
                        )
                    }
                </ul>
            )
        }

        default : {
            return(
                <ul style={style}>
                    {
                        todoList.map((todo) => 
                            <ListItem key={todo.key} text={todo.text} completed={todo.completed} id={todo.key} del={delTodo} />
                        )
                    }
                </ul>
            )
        }
    }
};

