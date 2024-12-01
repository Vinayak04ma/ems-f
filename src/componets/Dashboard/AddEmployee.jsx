import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: userData.length + 1,
      firstName: name,
      email,
      password,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: [],
    };

    const updatedEmployees = [...userData, newEmployee];
    setUserData(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Navigate back to admin dashboard
    navigate('/admin-dashboard');
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded shadow-lg bg-white dark:bg-gray-800"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>
        <div className="mb-3">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="mt-3 p-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
