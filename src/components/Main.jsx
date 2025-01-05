import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-slate-600 rounded-md">
      <ul className="flex text-white justify-evenly pt-5">
        <li>
          <Link to="/users">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span className="ms-2">کاربران</span>
          </Link>
        </li>
        <li>
          <Link to="/infos">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <span className="ms-2">اطلاعات</span>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <i class="fa fa-list" aria-hidden="true"></i>
            <span className="ms-2">دوره ها</span>
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <i class="fa fa-book" aria-hidden="true"></i>
            <span className="ms-2">وبلاگ</span>
          </Link>
        </li>
      </ul>


      
    </div>
  );
};

export default Main;
