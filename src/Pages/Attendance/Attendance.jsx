import React, { useEffect } from "react";
import { useState } from "react";
import AttendanceList from "./AttendanceList";

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

  const list = Object.values(attendanceList)
  console.log(list);

  return (
    <div className="overflow-x-auto w-9/12 mx-auto my-20">
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
