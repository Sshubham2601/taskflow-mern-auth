import express from "express";
import { createTodo } from "../controller/todo.controller.js";

const todoRoute = express.Router();

todoRoute.post("/create", createTodo);

export default todoRoute;
