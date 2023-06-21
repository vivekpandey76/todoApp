import express from "express";
import {
  addTodo,
  getTodo,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";
const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getTodo);
route.get("/todos/:id", toggleTodoDone);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
