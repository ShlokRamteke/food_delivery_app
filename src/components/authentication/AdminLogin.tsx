import React from "react";

import styles from './AdminLogin.module.css'
import Button from "../UI/Button";
const AdminLogin: React.FC<any> =props => {
    return <React.Fragment>
        <div className={styles.centeredContainer}>
            <div className={styles.adminLoginCard}>
                <h3 className={styles.adminLoginTitle}>Admin SignIn</h3>
                
                <input type="text" className={styles.input} placeholder="Enter Username"/>
            
                <input type="password" className={styles.input} placeholder=" Enter Password"/>
                <Button color="white" bgColor="transparent"/>
            </div>
        </div>
    </React.Fragment>
}

export default AdminLogin;