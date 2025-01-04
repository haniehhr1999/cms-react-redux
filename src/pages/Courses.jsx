import React from "react";
import CourseBox from "../components/CourseBox";

const Courses = () => {
  return (
    <div>
      <CourseBox />
      <div className="flex justify-between">
        <button className="bg-lime-600 text-white">افزودن دسته بندی</button>
        <div className="flex">
          <button className="bg-blue-600 text-white rounded-sm">
            افزودن دوره جدید
          </button>
          <button className="bg-red-600 text-white rounded-sm">
            اعمال تخفیف همه دوره ها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
