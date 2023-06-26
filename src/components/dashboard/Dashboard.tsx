import React from "react";
import FoodItem from "../foodItem/FoodItem";
import Navigation from "../topNav/Navigation";


interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}



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
                    {(props.foodItems as Dish[]).map((item:Dish) => {
                    return <FoodItem item={item} />
                    })}

            </div>
        </React.Fragment>
    )

}

export default Dashboard;