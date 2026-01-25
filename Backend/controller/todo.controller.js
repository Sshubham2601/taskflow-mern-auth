import Todo from "../model/todo.model.js";

//create todo
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

//Read todo
export const getTodos=async(req,res)=>{
    try {
        const Todos=await Todo.find();
        res.status(201).json({message:"Successfully fetching the toda Data",Todos})
    } catch (error) {
        res.status(400).json({message:"error occuring to fetching todo data"})
    }
};

//update todo

export const updateTodo=async(req,res)=>{
    try {
        const updateT=await Todo.findByIdAndUpdate(req.params.id ,req.body,{new:true})
        res.status(201).json({message:"Todo update successfully",updateT})
    } catch (error) {
        res.status(400).json({message:"error occuring to update todo data"})
    }
       
};

//delete todo

export const deleteTodo=async(req,res)=>{
    try {
        const deletedtodo= await Todo.findByIdAndDelete(req.params.id);
         if(!deletedtodo){
            return res.status(404).json({message:"Todo not found"})
         }
        return res.status(200).json({message:"Todo deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"error occuring to delete the todo"})
    }
}