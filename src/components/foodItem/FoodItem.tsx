import React from "react";
import styles from './FoodItem.module.css'
import Button from "../UI/Button";

interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

const FoodItem: React.FC<{item:Dish}> =props =>{
    const isAvailable =props.item.status ==='in-stock';
    return <React.Fragment>
        <div className={styles.itemContainer} key={props.item.id}>
            <div className={styles.itemTitle}>{props.item.name}</div>
            <div className={styles.itemPrice}>{props.item.price}</div>
            <div className={isAvailable ? styles.itemAvailable : styles.itemSold}>{isAvailable ? "Available": "Stock Out"}</div>
            <div style={{marginTop:"8px"}}>
                <Button label="Add Item" color="white" bgColor="transparent" />
                <Button label="View Dish" color="white" bgColor="transparent" />
            </div>
            
        </div>
    </React.Fragment>
}

export default FoodItem