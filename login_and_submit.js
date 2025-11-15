import express from "express";
import home from "./pages/home.js";
import form from "./pages/form.js";
import submit from "./pages/submit.js";

const app = express();

app.get("",(req,resp)=>{
resp.send(home())
})
app.get("/form",(req,resp)=>{
resp.send(form())
})
app.post("/submit",(req,resp)=>{
resp.send(submit())
})

app.listen(3300)