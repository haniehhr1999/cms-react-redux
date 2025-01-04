import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Articles from "./pages/Articles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
