

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTaskCreation = (task) => {
    const updatedUsers = userData.map((user) => {
      if (user.id === task.userId) {
        user.tasks.push(task);
        user.taskCounts.active += 1;
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers));
  };

  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask handleTaskCreation={handleTaskCreation} />
      <AllTask />
      <button
        onClick={() => navigate('/add-employee')}
        className="mt-5 p-3 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      >
        Add New Employee
      </button>
    </div>
  );
};

export default AdminDashboard;

