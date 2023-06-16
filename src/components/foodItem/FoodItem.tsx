import React from "react";

interface Dish{
    id:number;
    name:string;
    price:number;
    status:string;
}

const FoodItem: React.FC<{item:Dish}> =props =>{
    return <React.Fragment>
        <div>
            {props.item.name}
        </div>
    </React.Fragment>
}

export default FoodItem