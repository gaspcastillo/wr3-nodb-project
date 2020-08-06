const todos = require('./todos.json');
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

        }
    }


