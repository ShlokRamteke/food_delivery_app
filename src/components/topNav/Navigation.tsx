import React, {useState} from "react";
import { useNavigate } from "react-router";
import styles from "./Navigation.module.css"


type USER ='admin' | 'customer';

const Navigation: React.FC<{ isLoggedIn: boolean; user: USER} > = (props) => {
    const [showCart, setShowCart] = useState(false);

    const router: any=useNavigate();

    const handleManageOrderListClick = () => {
        setShowCart(true);
        router("/cart"); // Update the route to the manage order list page
      };

    function displayNavBar(user:USER){
        if (user==='customer' ){
            return props.isLoggedIn ? (
                <div className={styles.navBarBg}>
                    <ul className={styles.navigationBar}>
                        <li>  Food Deliveries</li>
                        <li  onClick={handleManageOrderListClick}> Manage Orders</li>
                        <li onClick={() => setShowCart(false)} > LogOut</li>
                    </ul>
                </div>
            ):(<div className={styles.navBarBg}>
                <ul  className={styles.navigationBar}>
                    <li> Food Deliveries</li>
                    <li className={styles.loginButton} onClick={()=> router('/login')}> Login</li>
                </ul>
            </div>
            );
        } else if (user==='admin'){
            return props.isLoggedIn ? (
                <div className={styles.navBarBg}>
                    <ul className={styles.navigationBar}>
                        <li>  Food Deliveries</li>
                        <li> Manage Dishes</li>
                        <li onClick={() => setShowCart(false)}> LogOut</li>
                    </ul>
                </div>
            ) : (
                <div className={styles.navBarBg}>
                    <ul  className={styles.navigationBar}>
                        <li> Food Deliveries</li>
                        <li> Admin Panel</li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <>
            {displayNavBar(props.user)}
            {showCart && (
                <div className={styles.cartContainer}>
                {/* Render your cart component here */}
                <h3>Cart Component</h3>
                </div>
      )}
        </>
        
    )
}


export default Navigation