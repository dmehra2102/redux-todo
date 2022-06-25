export const todo_func = (data)=>{
    return {
        type : "ADD_TODO",
        payload : data
    }
};

export const post_todo = (data)=> {
    return {
        type : "POST_NEW_TODO",
        payload : data
    }
}
export const delete_todo = (id)=>{
    return {
        type : "DELETE_TODO",
        payload : id
    }
};

export const upated_fun = ()=>{
    return {
        type : "UPDATED_TODO"
    }
};