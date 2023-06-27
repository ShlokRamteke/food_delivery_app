import React, {useState} from "react";
import { useNavigate } from "react-router";
import styles from './FoodItem.module.css'
import Button from "../UI/Button";

interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

interface FoodItemProps {
    item: Dish;
    addToCart: (item: Dish) => void;
    cartItemCount:number;
    isLoggedIn: boolean;
}


const FoodItem: React.FC<FoodItemProps> =({ item, addToCart, cartItemCount, isLoggedIn }) =>{
    const isAvailable =item.status ==='in-stock';
    const router=useNavigate();
    const viewDishHandler:any =() => {
        router(`view-dish/${item.id}`);
    }

    const [count, setCount] = useState(0);

    const handleAddToCart:any = () => {
        if (isLoggedIn) {
            addToCart(item);
            setCount(count+1);
        } else {
            alert("Please Login")
            router("/login")
        }
        
    }

    return <React.Fragment>
        <div className={styles.itemContainer} key={item.id}>
            <div className={styles.itemTitle}>{item.name}</div>
            <div className={styles.itemPrice}>{item.price}</div>
            <div className={isAvailable ? styles.itemAvailable : styles.itemSold}>{isAvailable ? "Available": "Stock Out"}</div>
            <div style={{marginTop:"8px"}}>
                {count > 0 ? (
                    <Button label={`Added: ${count}`} color="white" bgColor="transparent" disabled={true} />
                ) : (
                    <Button label="Add Item" color="white" bgColor="transparent" onClick={handleAddToCart} />
                )}
                <Button label="View Dish" color="white" bgColor="transparent" onClick={viewDishHandler} />
            </div>
            
        </div>
    </React.Fragment>
}

export default FoodItem