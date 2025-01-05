import React from "react";

const UserItem = ({ firstname, lastname, email }) => {
  return (
    <div className="px-4 py-2 border-2 border-neutral-400 bg-slate-200 rounded my-3">
      <img src="" alt="" />
      <div>{firstname} {lastname}</div>
      <div>{email}</div>
      <div className="flex">
        <button className="bg-slate-600 text-white rounded">پیام ها</button>
        <button className="bg-blue-600 text-white rounded">اطلاعات</button>
        <button className="bg-red-600 text-white rounded">حذف</button>
      </div>
    </div>
  );
};

export default UserItem;
