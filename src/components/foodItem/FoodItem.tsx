import React from "react";
import styles from './FoodItem.module.css'

interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

const FoodItem: React.FC<{item:Dish}> =props =>{
    const isAvailable =props.item.status ==='in-stock';
    return <React.Fragment>
        <div className={styles.itemContainer}>
            <div className={styles.itemTitle}>{props.item.name}</div>
            <div className={styles.itemPrice}>{props.item.price}</div>
            <div className={isAvailable ? styles.itemAvailable : styles.itemSold}>{isAvailable ? "Available": "Stock Out"}</div>
            
        </div>
    </React.Fragment>
}

export default FoodItem