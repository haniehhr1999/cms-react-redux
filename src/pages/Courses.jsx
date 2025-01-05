import React, { useEffect } from "react";
import CourseBox from "../components/CourseBox";
import { useDispatch, useSelector } from "react-redux";
import { getCourseFromServer } from "../redux/courses";

const Courses = () => {

  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseFromServer("https://dummyjson.com/users"));
  }, []);


  return (
    <div className="flex flex-col justify-between h-screen">
      {
        courses.map(course => <CourseBox key={course.id} />)
      }
      
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
