import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            title:""
        }
    }


titleHandler = (e) => {
    this.setState({
        title: e.target.value
    })
}
    render(){
        return <div className="form-container"> 
            <form onSubmit={this.props.addTodo(this.state.title)}>
                <input 
                name="title"
                value={this.state.title} 
                type="text" 
                placeholder="Add a new todo item..."
                onChange={(e) => this.titleHandler(e)}/>
                <button>Add Todo</button>
            </form>
        </div>
    }
}
export default Form;
