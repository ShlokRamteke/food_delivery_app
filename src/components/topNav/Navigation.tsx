import React from "react";
import styles from "./Navigation.module.css"


type USER ='admin' | 'customer';

const Navigation: React.FC<{ isLoggedIn: boolean; user: USER} > = (props) => {

    function displayNavBar(user:USER){
        if (user==='customer' ){
            return props.isLoggedIn ? (
                <div className={styles.navBarBg}>
                    <ul className={styles.navigationBar}>
                        <li>  Food Deliveries</li>
                        <li> Manage Orders</li>
                        <li> LogOut</li>
                    </ul>
                </div>
            ):(<div className={styles.navBarBg}>
                <ul  className={styles.navigationBar}>
                    <li> Food Deliveries</li>
                    <li> Login</li>
                </ul>
            </div>
            );
        } else if (user==='admin'){
            return props.isLoggedIn ? (
                <div className={styles.navBarBg}>
                    <ul className={styles.navigationBar}>
                        <li>  Food Deliveries</li>
                        <li> Manage Dishes</li>
                        <li> Manage Customers</li>
                        <li> LogOut</li>
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
        <React.Fragment>
            {displayNavBar(props.user)}
        </React.Fragment>
    )
}


export default Navigation