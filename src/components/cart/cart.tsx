import React from "react";
import { Link } from "react-router-dom";

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

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const getTotalPrice = (): number => {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
      totalPrice += cartItem.dish.price * cartItem.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.dish.id}>
                <h3>{cartItem.dish.name}</h3>
                <p>Price: ${cartItem.dish.price}</p>
                <p>Quantity: {cartItem.quantity}</p>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
