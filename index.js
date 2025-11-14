// const express = require("express");
import express from "express"
import home,{contact} from "./pages/home.js";
import about from "./pages/about.js";
const app = express();

app.get("",(req,resp)=>{
    // resp.send("<h1>This is express js ho me page </h1>")
    resp.send(home())
})

app.get("/about",(req,resp)=>{
    //resp.send("<h1>This is hhhabout page </h1>")
     resp.send(about())
})

app.get("/contact",(req,resp)=>{
    // resp.send("<h1>This is contact page </h1>")
    resp.send(contact())
})

app.listen(3100)