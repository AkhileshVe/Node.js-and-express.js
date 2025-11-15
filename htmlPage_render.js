import express from "express";
import path from 'path'
const app = express();

const abspath = path.resolve("pages")

const publicPath = path.resolve("pages") // this line for css lode
console.log(publicPath)// this line for css lode
app.use(express.static(publicPath)) // this line for css lode

app.get("/",(req, resp)=>{
    resp.sendFile(abspath+"/home.html")
});

app.get("/webpage",(req, resp)=>{
   resp.sendFile(abspath+"/web.html")
});

app.use((req,resp)=>{
    resp.status(404).sendFile(abspath+"/404.html")
})

app.listen(3300);