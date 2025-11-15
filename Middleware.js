// what is middleware?
// middleware in express.js is function that run before the final route handler

// function checkroute(req,resp,next){
// console.log(req.url)
// next()
// }

//____________________________________________________________
import express from "express";

const app = express()


function checkroute(req,resp,next){
console.log(req.url)
next()
}

app.use(checkroute)


app.get("",(req,resp)=>{
resp.send("home page")
})

app.get("/user",(req,resp)=>{
resp.send("user page")
})

app.get("/product",(req,resp)=>{
resp.send("product page")
})
app.listen(3400)