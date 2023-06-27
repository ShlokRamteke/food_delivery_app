import React, {FC, Fragment, useEffect, useState} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";
import CustomerLogin from "./components/customerLogin/CustomerLogin";
import DescribeItem from "./components/describeItem/DescribeItem";
import Cart from "./components/cart/cart";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

interface CartItem {
  dish: Dish;
  quantity: number;
}


const App: FC<any> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const [foodItems, setFoodItems] =useState<Dish[]>([]);
  const [cartItems, setCartItems]=useState<CartItem[]>([]);
  
  // Fetch food items from the server
  useEffect(()=> {
    const fetchData= async() => {
      try{
        const response = await fetch('http://127.0.0.1:8000/food-items');
        const data= await response.json();
        setFoodItems(data);
      } catch (error){
        console.error("Error fetching food items:", error);
      };
      
      
    }; 
    fetchData();
  }, []);

  const addToCart = (item: Dish) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.dish.id === item.id
    );

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.dish.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { dish: item, quantity: 1 },
      ]);
    }
  };

 
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={
          <Fragment>
            <Dashboard 
          isLoggedIn={isLoggedIn} foodItems={
          foodItems.length > 0 ? foodItems : [{id :0, name:'N/A', price: 0, status: 'sold'}]
          }
          addToCart={addToCart}
          cartItemCount={cartItems.length}
          />
          <Cart cartItems={cartItems} />
          </Fragment>
        }
        />
        
        <Route path="/admin" element={<Admin isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<CustomerLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/view-dish/:id" element={<DescribeItem foodItems={foodItems} />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
}

export default App;
