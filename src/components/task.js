import React from 'react';

const Task = () => {
    return <div className="todo-item">
            <h1 className="todo-title">{props.todo.title}</h1>
    </div>
};
export default Task;