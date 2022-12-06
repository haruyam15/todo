
import { useContext} from "react";
import ListItem from "./ListItem";
import { TodoListContext } from "../context/TodoListContext";

const style = {
    padding : '1rem 0.7rem',
    minHeight: '200px',
    background: '#fff'
}

export default function Content(){
    const {todoList, delTodo} = useContext(TodoListContext)
    
    return(
        <ul style={style}>
            {
                todoList.map((todo) => 
                    <ListItem key={todo.key} text={todo.text} completed={todo.completed} id={todo.key} del={delTodo} />
                )
            }
        </ul>
    );

};

