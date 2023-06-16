import React from "react";


interface FoodItem{
    id:number;
    name:string;
    price:number;
    status:string;
}

const foodItems: FoodItem[]=[
    {id:1, name:'Burger', price:299, status:'in-stock'},
    {id:2, name:'Pizza', price:599, status:'in-stock'},
    {id:3, name:'Noodles', price:199, status:'in-stock'},
    {id:4, name:'Pasta', price:299, status:'in-stock'},
    {id:5, name:'Tacos', price:99, status:'in-stock'},
    {id:5, name:'Sandwich', price:199, status:'in-stock'},
]

const Dashboard: React.FC<any> = (props) => {
    
    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            {foodItems.map(item=> {
                return <h1>{item.name}</h1>
            })}
        </React.Fragment>
    )

}

export default Dashboard;