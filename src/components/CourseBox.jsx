import React from "react";

import course from "../img/admin/course/course.png";

const CourseBox = () => {
  return (
    <div className="bg-white rounded flex border-2 border-gray-700">
      <img className="w-1/5 rounded" src={course} alt="" />
      <div className="w-4/5 flex flex-col p-4">
        <h3>دوره متخصص ریداکس</h3>
        <span>لورم اپیسوم متن ساختگی برای اپلیکیشن های..</span>
        <div className="bg-slate-300 flex justify-between items-center">
          <div className="flex">
            <div className="me-4">
              <i className="fa fa-money me-2" aria-hidden="true"></i>
              <span>قیمت : 1200 تومان</span>
            </div>
            <div className="me-4">
              <i className="fa fa-address-book me-2" aria-hidden="true"></i>
              <span>دسته بندی : فرانت اند</span>
            </div>
            <div className="me-4">
              <i className="fa fa-users me-2" aria-hidden="true"></i>
              <span>تعداد فروش : 16</span>
            </div>
          </div>
          <div>
            <button className="rounded bg-red-600 text-white px-3 py-1 ms-2">حذف</button>
            <button className="rounded bg-blue-600 text-white px-3 py-1 ms-2">ویرایش</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
