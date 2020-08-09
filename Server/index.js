const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4000;

app.use(express.json());

app.get("/api/todos", ctrl.getTodos)
app.post("/api/todos", ctrl.addTodo)
app.delete("/api/todos/:id", ctrl.deleteTodo)
app.put("/api/todos/complete/:id", ctrl.completeTodo)
// app.put("/api/todos/edit/:id")


app.listen(port , () => console.log(`Server listening up on port ${port}`));

