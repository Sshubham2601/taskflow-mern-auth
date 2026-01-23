import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app = express()
dotenv.config();

const PORT = process.env.PORT
const DB_URI=process.env.MongoDB_URI

try {
    mongoose.connect(DB_URI);
    console.log("MongoDb connected successfully")
} catch (error) {
   console.log(error)
}

app.get('/', (req, res) => {
  res.send('Hello guys')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
