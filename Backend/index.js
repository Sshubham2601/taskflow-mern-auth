import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import todoRoute from "./routes/todo.route.js";
const app = express()
dotenv.config();

const PORT = process.env.PORT
const DB_URI=process.env.MongoDB_URI

try {
   await mongoose.connect(DB_URI);
    console.log("MongoDb connected successfully")
} catch (error) {
   console.log(error)
}
app.use(express.json());
app.use("/api/todos", todoRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
