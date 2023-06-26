const express=require('express');
const cors=require("cors");
const http =require("http");

const PORT=process.env.PORT;

const app=express();


app.use(cors());
app.set("PORT", 8000 || PORT);

app.use("/food-items", (req,res,next)=>{
    const items=[1,2,4];
    res.send(items);
})

http.createServer(app).listen(app.get("PORT"), "127.0.0.1");
