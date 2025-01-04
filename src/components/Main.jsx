import React from "react";

const Main = () => {
  return (
    <div className="bg-slate-600 rounded-md">
      <ul className="flex text-white justify-evenly pt-5">
        <li>کاربران</li>
        <li>اطلاعات</li>
        <li>دوره ها</li>
        <li>وبلاگ</li>
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
    </div>
  );
};

export default Main;
