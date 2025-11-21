import express from "express";
import path from "path"
const app = express();

const abspath = path.resolve("pages")



function ageCheck(req,resp,next){
if(!req.query?.age || req.query.age<=18){
resp.send("<h1>Alert ! you can not access this page</h1>")
}else {
    next();
}}

app.use(ageCheck)

app.get("/",(req,resp)=>{
resp.send("<h1>This is home page</h1>")
})

app.get("/login",(req,resp)=>{
resp.send("<h1>This is login page</h1>")
})

app.get("/about",(req,resp)=>{
resp.send("<h1>This is about page</h1>")
})

app.get("/contact",(req,resp)=>{
resp.send("<h1>This is contact page</h1>")
})

app.get("/service",(req,resp)=>{
resp.send("<h1>This is service page</h1>")
})

app.use((req,resp)=>{
resp.status(404).sendFile(abspath+"/404.html")
})


app.listen(3500)