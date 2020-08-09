import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import'./reset.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends Component {
constructor(){
  super();
  this.state = {
    todos: []
  }
  this.addTodo = this.addTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  this.completeTodo = this.completeTodo.bind(this);
}

componentDidMount(){
  this.getTodos();
};

getTodos = () => {
  axios.get('/api/todos')
    .then( res => {
      this.setState({
        todos: res.data
      })
    }
  ).catch( err => console.log(err))
};

addTodo = (e, title) => {
  e.preventDefault()
  axios.post('/api/todos',{title})
  .then( res => {
    this.setState({
      todos: res.data
    })
  })
  .catch( err => console.log(err))
}

deleteTodo = (id) => {
  axios.delete(`/api/todos/${id}`)
  .then(res => {
    this.setState({
      todos: res.data
    })
  }).catch (err => console.log(err))
}
completeTodo = (id) => {
  axios.put(`/api/todos/complete/${id}`)
  .then( res => {
    this.setState({
      todos: res.data
    })
  }).catch( err => console.log(err))
}


  render(){
    const completedTasks = this.state.todos.reduce((acc, cur) => {
      return (cur.completed ? acc +1 : acc +0)
    } ,0)
    console.log(this.state.todos)
  return (
    <div >
      <Header completed = {completedTasks}/>
      <Form addTodo={this.addTodo}/>
      <List completeTodo= {this.completeTodo} deleteTodo={this.deleteTodo} todos={this.state.todos}/>
    </div>
  )};
};

export default App;

