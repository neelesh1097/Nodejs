const express =require('express');

const EventEmitter = require('events');
const app = express()
const event =new EventEmitter()

event.on("countAPI" ,()=>{
    console.log("event called")
})

app.get("/" , (req,res) =>{
    res.send("api called")
    event.emit("countAPI")
})


app.get("/search" , (req,res) =>{
    res.send("search API called")
    event.emit("countAPI")
})

app.get("/lo" , (req,res) =>{
    res.send("lo API called")
    event.emit("countAPI")
})


app.listen(3001)