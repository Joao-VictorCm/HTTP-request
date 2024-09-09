import express from "express"
const app = express()



app.get("/", (req, res) =>{
    res.send("hello, World")
})




app.listen(3001, () =>{
    console.log("server runnig on port http://localhost:3001/")
})