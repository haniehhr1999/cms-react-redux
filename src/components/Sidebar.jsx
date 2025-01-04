import React from "react";

const Sidebar = () => {
  return (
    <div className=" bg-slate-200 rounded-md  p-5 pt-0">
        <div>
            <img className="rounded-full" src="" alt="" />
        </div>
      <div className="text-center">
        <div>حانیه رحیم</div>
        <div>haniehrahim78@gmail.com</div>
      </div>
      <div className="flex justify-between">
        <span>نام :</span>
        <span>حانیه</span>
      </div>
      <div className="flex justify-between">
        <span>نام خانوادگی :</span>
        <span>رحیم</span>
      </div>
      <div className="flex justify-between">
        <span>تعداد دوره :</span>
        <span>33</span>
      </div>

      <button className="rounded w-full bg-blue-800 text-white py-1">
        تغییر اطلاعات
      </button>
    </div>
  );
};

export default Sidebar;
