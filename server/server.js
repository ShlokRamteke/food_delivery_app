const express=require('express');
const cors=require("cors");
const http =require("http");

const PORT=process.env.PORT;

const app=express();


app.use(cors());
app.set("PORT", 8000 || PORT);

app.use("/food-items", (req,res,next)=>{
    const foodItems=[
        {id:1, name:'Burger', price:299, status:'in-stock'},
        {id:2, name:'Pizza', price:599, status:'in-stock'},
        {id:3, name:'Noodles', price:199, status:'in-stock'},
        {id:4, name:'Pasta', price:299, status:'in-stock'},
        {id:5, name:'Tacos', price:99, status:'in-stock'},
        {id:6, name:'Sandwich', price:199, status:'in-stock'},
        {id:7, name:'Cookie', price:120, status:'sold'},
    ]
    res.send(foodItems);
})

http.createServer(app).listen(app.get("PORT"), "127.0.0.1");
