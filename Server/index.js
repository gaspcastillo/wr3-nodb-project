const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 8585;

app.use(express.json());

app.get("/api/todos", ctrl.getTodos)




app.listen(port , () => console.log(`Server listening up on port ${port}`));

