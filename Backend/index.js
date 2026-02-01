import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import todoRoute from "./routes/todo.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
const app = express()
dotenv.config();

const PORT = process.env.PORT
const DB_URI=process.env.MongoDB_URI

// app.get("/test", (req, res) => {
//   res.send("API working");
// });
//middleware
app.use(express.json());
app.use(cors({
   origin:process.env.FrontendURL,
   credentials:true
}))
try {
   await mongoose.connect(DB_URI);
    console.log("MongoDb connected successfully")
} catch (error) {
   console.log(error)
}

app.use("/api/todos", todoRoute);
app.use("/api/users", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
