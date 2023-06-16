import React, {FC, Fragment} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";



const App: FC<any> = () => {
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  </Fragment>
}

export default App;
