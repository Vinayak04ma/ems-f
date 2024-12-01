import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";

const CreateTask = () => {
  // Get userData from context
  const [userData, setUserData] = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  // State for form inputs
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Find the user and add the new task
    const updatedUserData = userData.map((user) => {
      if (user.firstName === asignTo) {
        user.tasks.push(newTask);
        user.taskCounts.newTask += 1; // Increment the 'newTask' count for this user
      }
      return user;
    });

    // Update the context with the new userData
    setUserData(updatedUserData);

    // Clear form inputs
    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div
      className={`p-5 mt-5 rounded ${
        theme === "dark"
          ? "bg-[#1c1c1c] text-white"
          : "bg-gray-300 text-gray-800 border border-gray-300"
      }`}
    >
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3
              className={`text-sm font-semibold mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className={`text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent mb-4 ${
                theme === "dark"
                  ? "border-[1px] border-gray-400 text-white bg-gray-800"
                  : "border-gray-400 border-[1px] text-gray-800 bg-gray-50"
              }`}
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3
              className={`text-sm font-semibold mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Date
            </h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className={`text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent mb-4 ${
                theme === "dark"
                  ? " border-[1px] border-gray-500 text-white bg-gray-800"
                  : "border-[1px] border-gray-400 text-gray-800 bg-gray-50"
              }`}
              type="date"
            />
          </div>
          <div>
            <h3
              className={`text-sm font-semibold mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Assign to
            </h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className={`text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent mb-4 ${
                theme === "dark"
                  ? "border-[1px] border-gray-500 text-white bg-gray-800"
                  : "border-[1px] border-gray-400 text-gray-800 bg-gray-50"
              }`}
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3
              className={`text-sm font-semibold mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent mb-4 ${
                theme === "dark"
                  ? "border-[1px] border-gray-500 text-white bg-gray-800"
                  : "border-[1px] border-gray-400 text-gray-800 bg-gray-50"
              }`}
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3
            className={`text-sm font-semibold mb-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className={`w-full h-44 text-sm py-2 px-3 rounded outline-none bg-transparent mb-4 ${
              theme === "dark"
                ? "border-[1px] border-gray-500 text-white bg-gray-800"
                : "border-[1px] border-gray-400 text-gray-800 bg-gray-50"
            }`}
          ></textarea>
          <button
            className={`py-3 px-5 rounded text-sm mt-4 w-full font-semibold ${
              theme === "dark"
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;




