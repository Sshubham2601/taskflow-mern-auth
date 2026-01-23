import Todo from "../model/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      text: req.body.text,
      completed: req.body.completed,
    });

    res.status(201).json({
      message: "Todo created successfully",
      newTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error occurring in todo creation",
    });
  }
};
