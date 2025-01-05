import React from "react";

const UserItem = ({ firstname, lastname, email, image }) => {
  return (
    <div className="px-4 py-2 bg-[#e1e7ce] rounded my-3 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-12" src={image} alt="" />
        <div className="flex flex-col mx-3">
          <div className="text-[#283618] font-bold">
            {firstname} {lastname}
          </div>
          <div className="text-[#606c38]">{email}</div>
        </div>
      </div>
      <div className="flex text-sm">
        <button className="bg-slate-600 text-white rounded py-1 px-3">
          پیام ها
        </button>
        <button className="bg-blue-600 text-white rounded py-1 px-3 mx-2">
          اطلاعات
        </button>
        <button className="bg-red-600 text-white rounded py-1 px-3">حذف</button>
      </div>
    </div>
  );
};

export default UserItem;
