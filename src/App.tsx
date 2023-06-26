import React, {FC, Fragment, useEffect, useState} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";
import CustomerLogin from "./components/customerLogin/CustomerLogin";
import DescribeItem from "./components/describeItem/DescribeItem";



const App: FC<any> = () => {
  const isLoggedIn=false;

  const [foodItems, setFoodItems] =useState([])

  useEffect(()=> {
    const fetchData= async() => {
      const response = await fetch('http://127.0.0.1:8000/food-items');
      const data= await response.json();
      setFoodItems(data);
    }; 
    fetchData();
  }, []);

  

  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<Dashboard isLoggedIn={isLoggedIn} foodItems={foodItems.length > 0 ? foodItems : [{id :0, name:'N/A', price: 0, status: 'sold'}]} />}/>
        <Route path="/admin" element={<Admin sLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/view-dish" element={<DescribeItem />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
}

export default App;
