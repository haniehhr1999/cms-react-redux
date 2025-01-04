import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-slate-200 rounded-md">
      <div className="">
        <div>حانیه رحیم</div>
        <div>توسعه دهنده فرانت اند</div>
      </div>

      <div>
        <button className="bg-sky-700 text-white text-center rounded-sm py-1 px-3 flex items-center">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span className="mx-2">خروج از پنل</span>

        </button>
      </div>

    </div>
  );
};

export default Navbar;
