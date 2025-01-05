import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Articles from "./pages/Articles";
import Infos from "./pages/Infos";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/infos" element={<Infos />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
