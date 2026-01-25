import express from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controller/todo.controller.js";

const todoRoute = express.Router();

todoRoute.post("/create", createTodo);
todoRoute.get("/fetch", getTodos);
todoRoute.put("/update/:id",updateTodo);
todoRoute.delete("/delete/:id",deleteTodo)

export default todoRoute;
