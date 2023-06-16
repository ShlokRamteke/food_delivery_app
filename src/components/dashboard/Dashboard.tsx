import React from "react";
import FoodItem from "../foodItem/FoodItem";


interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

const foodItems: Dish[]=[
    {id:1, name:'Burger', price:299, status:'in-stock'},
    {id:2, name:'Pizza', price:599, status:'in-stock'},
    {id:3, name:'Noodles', price:199, status:'in-stock'},
    {id:4, name:'Pasta', price:299, status:'in-stock'},
    {id:5, name:'Tacos', price:99, status:'in-stock'},
    {id:6, name:'Sandwich', price:199, status:'in-stock'},
    {id:7, name:'Cookie', price:120, status:'sold'},
]


const Dashboard: React.FC<any> = (props) => {
    
    return (
        <React.Fragment>
   
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
            >
                {foodItems.map((item:Dish) => {
                    return <FoodItem item={item}/>
                })}
            </div>
        </React.Fragment>
    )

}

export default Dashboard;