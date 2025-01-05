import React, { useEffect } from "react";
import UserItem from "../components/UserItem";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromServer } from "../redux/users";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFromServer("https://dummyjson.com/users"));
  }, []);

  return (
    <div className="bg-slate-600 rounded-md p-5">
      {/* <div className="grid grid-cols-2 gap-4 p-5">
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
      </div> */}

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <input
            className="w-full rounded-sm py-1 px-2"
            type="text"
            placeholder="نام کاربری یا ایمیل"
          />
        </div>
        <div className="col-span-1">
          <button className="bg-slate-600 text-white rounded">حذف کاربر</button>
        </div>
      </div>

      {users.map((user) => (
        <UserItem
          key={user.id}
          firstname={user.firstName}
          lastname={user.lastName}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Users;
