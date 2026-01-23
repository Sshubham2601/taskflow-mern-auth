import mongoose from "mongoose";

const createSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
},
{ timestamps: true }
)
const Todo=mongoose.model("Todo",createSchema);

export default Todo;