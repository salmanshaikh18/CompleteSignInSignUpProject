import express from "express"
import {config} from "dotenv"

const app = express()
config()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("server is running")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})