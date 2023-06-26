import React from "react";

import styles from './CustomerLogin.module.css'
import Button from "../UI/Button";

const CustomerLogin: React.FC<any> =props => {
    return < React.Fragment>
    <div className={styles.centeredContainer}>
        <div className={styles.customerLoginCard}>
            <h3 className={styles.customerLoginTitle}>Customer SignIn</h3>
            <input type="text" className={styles.input} placeholder="Enter your Username" />
            <input type="password" className={styles.input} placeholder="Enter your Password" />
            <button className={styles.loginButton}>Log In</button>
            </div>
    </div>
        
    </React.Fragment>
};

export default CustomerLogin