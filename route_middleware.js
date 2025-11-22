import express from "express";

const app = express()

function checkagemiddleware(req, resp, next){
  if(!req.query.age || req.query.age < 18){
    resp.send("you are not allowed to use this page")
  }else{
    next()
  }
}



app.get("/",(req,resp)=>{
    resp.send("<h1>home page</h1>")
})

app.get("/login",checkagemiddleware,(req,resp)=>{
    resp.send("<h1>login page</h1>")
})

app.get("/user",(req,resp)=>{
    resp.send("<h1>user page</h1>")
})

app.get("/product",(req,resp)=>{
    resp.send("<h1>product page</h1>")
})

app.listen(3700)