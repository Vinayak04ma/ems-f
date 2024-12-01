import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const handleRemoveEmployee = (id) => {
    // Filter out the employee with the given ID
    const updatedUserData = userData.filter((employee) => employee.id !== id);

    // Update the context and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
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
            className={`border-2 mb-2 py-2 px-4 flex justify-between rounded ${
              theme === "dark" ? "border-emerald-500" : "border-blue-400"
            }`}
          >
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
        ))}
      </div>
    </div>
  );
};

export default AllTask;

