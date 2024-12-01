

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  
  // State to track which employee's tasks are visible
  const [visibleTasks, setVisibleTasks] = useState(null);

  const handleRemoveEmployee = (id) => {
    const updatedUserData = userData.filter((employee) => employee.id !== id);
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  const toggleTasks = (id) => {
    if (visibleTasks === id) {
      setVisibleTasks(null); // Hide tasks if currently visible
    } else {
      setVisibleTasks(id); // Show tasks for the selected employee
    }
  };

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
        <span className="text-lg font-medium w-1/5">Actions</span>
      </div>
      <div>
        {userData.map((employee) => (
          <div
            key={employee.id}
            className={`border-2 mb-4 py-2 px-4 flex flex-col rounded ${
              theme === "dark" ? "border-emerald-500" : "border-blue-400"
            }`}
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
              <h3
                className={`text-lg font-medium w-1/5 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {employee.taskCounts.newTask}
              </h3>
              <h5
                className={`text-lg font-medium w-1/5 ${
                  theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                }`}
              >
                {employee.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5">
                {employee.taskCounts.completed}
              </h5>
              <h5
                className={`text-lg font-medium w-1/5 ${
                  theme === "dark" ? "text-red-600" : "text-red-400"
                }`}
              >
                {employee.taskCounts.failed}
              </h5>
              <div className="flex gap-2 w-1/5">
                <button
                  onClick={() => toggleTasks(employee.id)}
                  className={`text-sm px-3 py-2 rounded ${
                    theme === "dark"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-400 text-white hover:bg-blue-500"
                  }`}
                >
                  {visibleTasks === employee.id ? "Hide Tasks" : "Show Tasks"}
                </button>
                <button
                  onClick={() => handleRemoveEmployee(employee.id)}
                  className={`text-sm px-3 py-2 rounded ${
                    theme === "dark"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-400 text-white hover:bg-red-500"
                  }`}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Render tasks if visibleTasks matches employee id */}
            {visibleTasks === employee.id && (
              <div
                className={`mt-4 p-3 rounded ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">Tasks:</h3>
                {employee.tasks.length > 0 ? (
                  <ul className="list-disc ml-5">
                    {employee.tasks.map((task, index) => (
                      <li key={index} className="mb-2">
                        <strong>{task.taskTitle}:</strong> {task.taskDescription}{" "}
                        <span className="italic text-sm">
                          (Category: {task.category}, Date: {task.taskDate})
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="italic">No tasks assigned.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;


