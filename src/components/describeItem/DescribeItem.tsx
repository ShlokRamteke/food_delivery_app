import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DescribeItem.module.css";

const DescribeItem: React.FC<any> = (props) => {
  const { id } = useParams<{ id?: string }>();

  const foodItem = props.foodItems.find(
    (item: any) => item.id === parseInt(id!)
  ) || null;

  return (
    <div className={styles.container}>
      {foodItem ? (
        <div>
          <h2 className={styles.title}>{foodItem.name}</h2>
          <p className={styles.description}>{foodItem.description}</p>
          <p className={styles.price}>Price: {foodItem.price}</p>
        </div>
      ) : (
        <p className={styles.notFound}>Food item not found.</p>
      )}
    </div>
  );
};

export default DescribeItem;
