import { Outlet } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-5 gap-6 p-5" dir="rtl">
      <div className="col-span-5">
        <Navbar />
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Main />
        <Outlet />

      </div>
    </div>
  );
}

export default App;
