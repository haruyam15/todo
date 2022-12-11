
import { useTodo } from "../context/TodoListContext";
import ListItem from "./ListItem";


export default function Content(){

    const {todoList, delTodo, tabs} = useTodo();
    const selectedTab = tabs.filter((tab) => tab.selected)[0].name;

    const style = {
        padding : '1rem 0.7rem',
        minHeight: '100px',
        maxHeight: '500px',
        overflowY: 'auto', 
        background: 'var(--color-bg-white)',
    }


    switch (selectedTab) {
        case "All" : {
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

        case "Active" : {
            return(
                <ul style={style}>
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
                <ul style={style}>
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

