import React, {FC, Fragment} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";



const App: FC<any> = () => {
  const isLoggedIn=false;
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} />}/>
        <Route path="/admin" element={<Admin sLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
}

export default App;
