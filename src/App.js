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

addTodo = (title) => {
  axios.post('/api/todos',{title})
  .then( res => {
    this.setState({
      todos: res.data
    })
  })
  .catch( err => console.log(err))
}

  render(){
    console.log(this.state)
  return (
    <div >
      <Header/>
      <Form addTodo={this.addTodo}/>
      <List todos={this.state.todos}/>
    </div>
  )};
};

export default App;
