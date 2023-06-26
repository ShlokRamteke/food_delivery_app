import React from "react";
import FoodItem from "../foodItem/FoodItem";
import Navigation from "../topNav/Navigation";


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
            <Navigation isLoggedIn={props.isLoggedIn} user='customer' />
            <h1 style={{
                fontFamily: "Bagel Fat One",
                fontSize:32,
                textAlign:"center",
                marginTop: "120px",
            }}
            >
                Menu Items
            </h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:"center",
                    alignItems:"center",
                    gap: "20px",
                    padding: "15px",
                    flexWrap:"wrap",
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