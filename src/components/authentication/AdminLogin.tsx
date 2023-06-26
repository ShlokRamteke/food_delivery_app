import React from "react";

import styles from './AdminLogin.module.css'
const AdminLogin: React.FC<any> =props => {
    return <React.Fragment>
        <div className={styles.adminLoginCard}>
            <div className={styles.input}>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <input type="password" />
            </div>
        </div>
    </React.Fragment>
}

export default AdminLogin;