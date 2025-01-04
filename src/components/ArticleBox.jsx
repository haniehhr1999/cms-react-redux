import React from 'react'
import course from "../img/admin/course/course.png"

const ArticleBox = () => {
  return (
    <div className="bg-white rounded flex">
        <img className="w-1/5 rounded" src={course} alt="" />
        <div className="w-4/5 flex flex-col">
          <h3>دوره متخصص ریداکس</h3>
          <span>لورم اپیسوم متن ساختگی برای اپلیکیشن های..</span>
          <div className="bg-slate-300 flex justify-between">
            <div className="flex">
              <div>
                <i class="fa fa-money" aria-hidden="true"></i>
                <span>قیمت : 1200 تومان</span>
              </div>
              <div>
                <i class="fa fa-address-book" aria-hidden="true"></i>
                <span>دسته بندی : فرانت اند</span>
              </div>
              <div>
                <i class="fa fa-users" aria-hidden="true"></i>
                <span>تعداد فروش : 16</span>
              </div>
            </div>
            <div>
              <button className="rounded bg-red-600 text-white">حذف</button>
              <button className="rounded bg-blue-600 text-white">ویرایش</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ArticleBox