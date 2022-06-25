const init = {todo : []};

export const Todoreducer = (store = init,{type,payload})=> {
    switch (type) {
        case "ADD_TODO":
            return {todo : payload};
        case "POST_NEW_TODO":
            return {todo : [...store.todo, payload]};
        case "UPDATED_TODO":
            return store;
        case "DELETE_TODO":
            return {todo : store.todo.filter((item)=> item.id!==payload)};
        default:
            return store;
    }
}