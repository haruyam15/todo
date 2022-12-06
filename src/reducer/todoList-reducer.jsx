
export default function todoListReducer(todoList, action){
    let newTodoList = [...todoList];
    const setStorage = (list) => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }
    switch(action.type){
        case 'add' : {
            newTodoList = [
                ...newTodoList,
                {
                    text : action.text,
                    key : action.key,
                    completed : false
                }
            ]
            setStorage(newTodoList);
            return newTodoList;
        }
        

        case 'delete' : {
            const key = action.key;
            newTodoList = newTodoList.filter((todo)=> todo.key !== key);
            setStorage(newTodoList);
            return newTodoList;

        }
        case 'checking' : {
            const checked = action.checked;
            const key = action.key;
            newTodoList = newTodoList.map((todo)=>{
                if(todo.key === key){
                    return {
                        ...todo,
                        completed:checked
                    }
                }
                return todo
            })
            setStorage(newTodoList);
            return newTodoList;
        }
    }
}
