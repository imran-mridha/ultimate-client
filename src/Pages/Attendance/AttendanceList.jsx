import React from "react";

const AttendanceList = ({ data }) => {
  const { name, attendance } = data;
  const attenDanceStatus = Object.values(attendance);
  const date = Object.keys(attendance);
  return (
    <>
      <tr key={data.id} className="hover">
        <td>{date[1]}</td>
        <td>{name}</td>
        <td>{attenDanceStatus[1].status}</td>
      </tr>
    </>
  );
};

export default AttendanceList;
