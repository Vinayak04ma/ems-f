import React, { useState, useContext } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Handle task creation (passing down to CreateTask component)
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
    </div>
  );
};

export default AdminDashboard;
