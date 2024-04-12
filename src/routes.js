import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Personal from "./pages/personal";

const RoutesList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/personal">Personal</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/personal" element={<Personal />}></Route>
      </Routes>
    </div>
  );
};

export const routesConfig = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/personal",
    element: Personal,
  },
];

export default RoutesList;
