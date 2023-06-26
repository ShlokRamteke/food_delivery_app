import React from "react";

import styles from './CustomerLogin.module.css'

const CustomerLogin: React.FC<any> =props => {
    return < React.Fragment>
    <div className={styles.centeredContainer}>
        <div className={styles.customerLoginCard}>
                <div>
                    <input type="text" placeholder="Enter your Username" />
                </div>
            </div>
    </div>
        
    </React.Fragment>
};

export default CustomerLogin