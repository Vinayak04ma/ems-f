import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-5 rounded mt-5 ${
        theme === "dark" ? "bg-[#1c1c1c] text-white" : "bg-[#f0f0f0] text-black"
      }`}
    >
      <div
        className={`mb-2 py-2 px-4 flex justify-between rounded ${
          theme === "dark" ? "bg-red-500" : "bg-red-300"
        }`}
      >
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className={`border-2 mb-2 py-2 px-4 flex justify-between rounded ${
              theme === "dark" ? "border-emerald-500" : "border-blue-400"
            }`}
          >
            <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
            <h3
              className={`text-lg font-medium w-1/5 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {elem.taskCounts.newTask}
            </h3>
            <h5
              className={`text-lg font-medium w-1/5 ${
                theme === "dark" ? "text-yellow-400" : "text-yellow-600"
              }`}
            >
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5">
              {elem.taskCounts.completed}
            </h5>
            <h5
              className={`text-lg font-medium w-1/5 ${
                theme === "dark" ? "text-red-600" : "text-red-400"
              }`}
            >
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
