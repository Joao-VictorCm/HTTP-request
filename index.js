import express from "express"
const app = express()
const port = 3001



app.get("/", (req, res) =>{
    res.send("<h1>hello, World</h1>")
})




app.listen(port, () =>{
    console.log(`server runnig on port http://localhost:${3001}/`)
})