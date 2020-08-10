import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            title:"",
            balance: ""
        }
    }


titleHandler = (e) => {
    this.setState({
        title: e.target.value
    })
}

balanceHandler = (e) => {
    this.setState({
        balance: e.target.value
    })
}
    render(){
        return <div className="form-container"> 
            <form onSubmit={e => {
                this.props.addTodo(e, this.state.title, this.state.balance)
                this.setState({title:"", balance:""})}}>
                <input 
                name="title"
                value={this.state.title} 
                type="text" 
                placeholder="Additional Expenses"
                onChange={(e) => this.titleHandler(e)}/>
                <input 
                name="balance"
                value={this.state.balance}
                type="number"
                placeholder= "Additional Balance"
                onChange={(e) => this.balanceHandler(e)}/>
                 <button>Add Expense</button>
            </form>
        </div>
    }

}
export default Form;
