import React from 'react';
import Task from './Task';

const List = (props) => {
    const todoMap = props.todos.map( todo => {
            
return <Task
 key={todo.id} 
 completeTodo = {props.completeTodo}
 deleteTodo = {props.deleteTodo} 
 todo={todo}/>
    })
const total = props.todos.reduce((acc,todo ) => {
    acc += +todo.balance
    return acc
}, 0 ) 

const budgetRemaining = (+props.budget-total).toFixed(2);
    return <div className="list-container">
        {todoMap}
       <div className = "todo-item total"> Total {total} </div>
       <div className = "budgetTotal" > Total Budget  
      <input 
      name = "budget"
      value= {props.budget}
      type= "number"
      placeholder= ""
      onChange={(event) => props.budgetHandler(event)}
      ></input>
      <div className = { budgetRemaining > 0? "positive-budget" : "negative-budget" 
          
      }> Budget Remaining {budgetRemaining}
      </div>
    </div>
    </div>
}
export default List;