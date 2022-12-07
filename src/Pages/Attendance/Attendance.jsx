import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import AttendanceList from "./AttendanceList";
import logo from "../../assets/logo/logo.svg";

const Attendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAttendanceList(data));
  }, []);

  const list = Object.values(attendanceList);
  console.log(list);

  return (
    <div className="overflow-x-auto w-9/12 mx-auto my-20">
      <div className="flex justify-between items-center mb-10">
        <img  src={logo} alt="" />
        <Link to='/login'><button className="px-3 py-2 text-lg rounded-md text-white bg-primary">
          Log Out
        </button></Link>
      </div>
      <h2 className="uppercase text-2xl text-center mb-5">
        Attendance information
      </h2>
      <table className="table w-full border">
        <thead>
          <tr>
            <th className="text-xl">Date</th>
            <th className="text-xl">Employee Name</th>
            <th className="text-xl">Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data) => (
            <AttendanceList key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
