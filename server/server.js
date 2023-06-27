const express=require('express');
const cors=require("cors");
const http =require("http");

const PORT=process.env.PORT;

const app=express();


app.use(cors());
app.set("PORT", 8000 || PORT);

app.use("/food-items", (req,res,next)=>{
    const foodItems=[
        {
            id: 1,
            name: 'Burger',
            description: 'A delicious burger with juicy patty and fresh ingredients',
            price: 299,
            status: 'in-stock',
          },
          {
            id: 2,
            name: 'Pizza',
            description: 'A mouthwatering pizza with a variety of toppings',
            price: 599,
            status: 'in-stock',
          },
          {
            id: 3,
            name: 'Noodles',
            description: 'Tasty noodles cooked to perfection',
            price: 199,
            status: 'in-stock',
          },
          {
            id: 4,
            name: 'Pasta',
            description: 'Creamy pasta with a flavorful sauce',
            price: 299,
            status: 'in-stock',
          },
          {
            id: 5,
            name: 'Tacos',
            description: 'Authentic tacos with a burst of flavors',
            price: 99,
            status: 'in-stock',
          },
          {
            id: 6,
            name: 'Sandwich',
            description: 'Freshly made sandwich with a variety of fillings',
            price: 199,
            status: 'in-stock',
          },
          {
            id: 7,
            name: 'Cookie',
            description: 'Delicious cookies that melt in your mouth',
            price: 120,
            status: 'sold',
          },
    ]
    res.send(foodItems);
})

http.createServer(app).listen(app.get("PORT"), "127.0.0.1");
