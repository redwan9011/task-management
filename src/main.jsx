import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Layouts/Layouts';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard';
import PrivateRout from './PrivateRout/PrivateRout';

import UserProfile from './Dashboard/UserProfile';
import CreateTask from './Dashboard/CreateTask';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children: [
      {
        path: 'profile',
        element: <PrivateRout> <UserProfile></UserProfile> </PrivateRout>
      },
      {
        path: 'createTask',
        element: <PrivateRout><CreateTask></CreateTask></PrivateRout>
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
