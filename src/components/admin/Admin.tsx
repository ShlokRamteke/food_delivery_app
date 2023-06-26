import React from "react";
import Navigation from "../topNav/Navigation";
import AdminLogin from "../authentication/AdminLogin";

const Admin: React.FC<any> =props => {
    return (
    <React.Fragment>
        <Navigation isLoggedIn={props.isLoggedIn} user='admin' />
        <AdminLogin />
    </React.Fragment>
    );
};

export default Admin;