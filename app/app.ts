import express = require('express');
import { UserController } from './api/controller/user';
import bodyParser from 'body-parser';
import { ToDoController } from './api/controller/toDo';
var cors = require('cors')

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));


var userController = new UserController();
app.post("/api/user",userController.registration)
app.post("/api/login",userController.login)

var toDoController = new ToDoController();
app.post("/api/toDo",toDoController.create)
app.put("/api/toDo/:id",toDoController.update)
app.delete("/api/toDo/:id",toDoController.remove)
app.get("/api/toDo/:userId",toDoController.getForUser)
app.put("/api/toDo/confirm/:toDoId",toDoController.confirm)
app.put("/api/toDo/unconfirm/:toDoId",toDoController.unconfirm)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
export default app;