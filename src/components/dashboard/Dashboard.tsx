import React from "react";
import FoodItem from "../foodItem/FoodItem";
import Navigation from "../topNav/Navigation";


interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

interface DashboardProps {
    isLoggedIn: boolean;
    foodItems: Dish[];
    addToCart: (item: Dish) => void;
    cartItemCount: number;
}

const Dashboard: React.FC<DashboardProps> =  ({ isLoggedIn, foodItems, addToCart, cartItemCount }) => {
    
    const handleAddToCart = (item: Dish) => {
        if (isLoggedIn) {
          addToCart(item);
        } else {
          // Handle logic for not logged in user
          alert("Please log in to add items to the cart.");
        }
      };
    
    return (
        <React.Fragment>
            <Navigation isLoggedIn={isLoggedIn} user='customer' />
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
                   {foodItems.map((item) => (
                        <FoodItem
                            key={item.id}
                            item={item}
                            addToCart={handleAddToCart}
                            cartItemCount={cartItemCount}
                            isLoggedIn={isLoggedIn}
                        />
                    ))}

            </div>
        </React.Fragment>
    )

}

export default Dashboard;