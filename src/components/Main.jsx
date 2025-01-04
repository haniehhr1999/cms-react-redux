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
          <Link to="/users">
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
      <div className="grid grid-cols-2 gap-4 p-5">
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="نام"
        />
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="نام خانوادگی"
        />
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="نام کاربری"
        />
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="ایمیل"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 pt-0">
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="رمز جاری"
        />
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="رمز جدید"
        />
        <input
          className="py-1 px-2 focus:outline-none focus:bg-blue-200 rounded-sm"
          type="text"
          placeholder="تکرار رمز جدید"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 p-5">
        <div className="col-span-3">
          <input
            className="w-full rounded-sm py-1 px-2"
            type="text"
            placeholder="نام کاربری یا ایمیل"
          />
        </div>
        <div className="col-span-1">
          <button className="bg-slate-600 text-white rounded">حذف کاربر</button>
        </div>
      </div>

      <div className="p-5">
        <img src="" alt="" />
        <div>حانیه رحیم</div>
        <div>haniehrahim78@gmail.com</div>
        <div className="flex">
          <button className="bg-slate-600 text-white rounded">پیام ها</button>
          <button className="bg-blue-600 text-white rounded">اطلاعات</button>
          <button className="bg-red-600 text-white rounded">حذف</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
