import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", contactRoutes)
app.get("/", (req, res) => {
  res.send("API running 🚀")
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})