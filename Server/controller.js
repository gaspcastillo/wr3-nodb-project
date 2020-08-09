const todos = require('./todos.json');
const { default: List } = require('../src/components/List');
let id = 4;

module.exports = {
    getTodos: (req, res) => {
        res.status(200).send(todos);
    },
    addTodo: (req, res) => {
        const { title } = req.body;
        if (!title) {
            res,status(405).send('Expected to receive a title for the todo')
        } else {
            const newTodo = {
                id, 
                title,
                completed: false
            };
            todos.push(newTodo);
            id++;
            res,status(200).send(todos);
          }
        }, 
        deleteTodo: (req, res) => {
            // console.log(req.params)
            const {id} = req.params
            const index = todos.findIndex( todo => todo.id === +id);
            if(index === -1){
                res.status(404).send('Budget item not found in list')
            } else {
                todos.splice(index, 1);
                res.status(200).send(todos)
            }
        },
        completeTodo: (req, res) => {
            const {id} = req.params;
            const index = todos.findIndex(todo => todo.id === +id);
            if( index === -1 ){
                res.status(404).send('Budget item not found in list')
            } else {
                todos[index].completed = !todos[index].completed
                res.status(200).send(todos)
            }
        }
}
