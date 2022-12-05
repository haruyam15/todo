
export default function todoListReducer(todoList, action){
    switch(action.type){
        case 'add' : {
            const newTodo = {
                    text : action.text,
                    key : action.key,
                    completed : false
                }
            return [...todoList, newTodo]
        }
        case 'delete' : {
            const key = action.key;
            return todoList.filter((todo)=> todo.key !== key);
        }
    }
}
