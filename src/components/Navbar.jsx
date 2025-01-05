import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-slate-200 rounded-md">
      <div className="">
        <div>حانیه رحیم</div>
        <div>توسعه دهنده فرانت اند</div>
      </div>

      <div className="flex">
      <i className="bg-slate-300 p-2 rounded-full fa fa-sun-o" aria-hidden="true"></i>
      <i className="bg-slate-300 p-2 mx-2 rounded-full fa fa-bell" aria-hidden="true"></i>

        <button className="bg-sky-700 text-white text-center rounded-sm py-1 px-3 flex items-center">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span className="mx-2">خروج از پنل</span>

        </button>
      </div>

    </div>
  );
};

export default Navbar;
