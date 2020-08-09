import React from 'react';

const Task = (props) => {
    return <div className="todo-item">
            <h1 className="todo-title">{!props.todo.completed ? props.todo.title : "Completed!"}</h1>
       <div className='btn-container'>
        <button className = "todo-btn" 
        onClick={() => props.deleteTodo(props.todo.id)}>X</button>
        <button className = "todo-btn" onClick ={() => props.completeTodo(props.todo.id)}> Update</button>
    </div>
    </div>
};

export default Task;