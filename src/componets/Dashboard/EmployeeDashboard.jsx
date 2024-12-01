// import React from 'react';
// import Header from '../other/Header';
// import TaskListNumbers from '../other/TaskListNumber';
// import TaskList from '../TaskList/TaskList';

// const EmployeeDashboard = (props) => {
//   return (
//     <div className="p-10  h-screen">
//       <Header changeUser={props.changeUser} data={props.data} />
//       <TaskListNumbers data={props.data} />
//       <TaskList data={props.data} />
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="p-10 h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
      <button
        onClick={() => navigate('/change-credentials')}
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Change Credentials
      </button>
    </div>
  );
};

export default EmployeeDashboard;

