import express from "express"
const app = express()
const port = 3001



app.get("/", (req, res) =>{
    res.send("<h1>Home Page</h1>")
})

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact</h1>")
})

app.get("/about", (req, res) =>{
    res.send("<h1>About me </h1>")
})


app.listen(port, () =>{
    console.log(`server runnig on port http://localhost:${3001}/`)
})