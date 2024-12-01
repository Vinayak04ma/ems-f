// import React, { useContext, useEffect, useState } from 'react';
// import Login from './componets/Auth/Login';
// import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard';
// import AdminDashboard from './componets/Dashboard/AdminDashboard';
// import { AuthContext } from './context/AuthProvider';
// import { ThemeProvider } from './context/ThemeContext';


// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const [userData, SetUserData] = useContext(AuthContext);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('loggedInUser');
    
//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (email === 'admin@me.com' && password === '123') {
//       setUser('admin');
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
//     } else if (userData) {
//       const employee = userData.find((e) => email === e.email && e.password === password);
//       if (employee) {
//         setUser('employee');
//         setLoggedInUserData(employee);
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
//       }
//       else {
//         alert("Invalid Credentials");
//       }
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <ThemeProvider>
//     <>
    
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
//     </>
//     </ThemeProvider>
//   );
// };  

// export default App;

  


import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './componets/Auth/Login';
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard';
import AdminDashboard from './componets/Dashboard/AdminDashboard';
import AddEmployee from './componets/Dashboard/AddEmployee'; // Ensure this component exists
import { AuthContext } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeContext';
import ChangeCredentials from "./componets/other/ChangeCredentials"

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      navigate('/admin-dashboard'); // Redirect to Admin Dashboard
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        navigate('/employee-dashboard'); // Redirect to Employee Dashboard
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
    navigate('/'); // Redirect to Login Page
  };

  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={user === 'admin' ? '/admin-dashboard' : '/employee-dashboard'} />} />

      {/* Admin Routes */}
      {user === 'admin' && (
        <>
          <Route path="/admin-dashboard" element={<AdminDashboard changeUser={handleLogout} />} />
          <Route path="/add-employee" element={<AddEmployee changeUser={handleLogout} />} />
        </>
      )}

      {/* Employee Routes */}
      {user === 'employee' && (
        <Route path="/employee-dashboard" element={<EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />} />
      )}
       <Route
           path="/change-credentials"
           element={<ChangeCredentials />}
      />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
     
    </Routes>
  );
};

export default App;
