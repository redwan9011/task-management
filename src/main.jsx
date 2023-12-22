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
import Todo from './Dashboard/Todo';


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
        path: '/audience',
        element: <UsingPeople></UsingPeople>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
    
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
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
      {
        path: 'todo',
        element: <PrivateRout> <Todo></Todo> </PrivateRout>
      },
      {
        path: 'update/:id',
        element: <PrivateRout> <UpdateTask></UpdateTask> </PrivateRout>,
        loader:  ({params})=> fetch( ` http://localhost:5000/tasks/${params.id}`)

      },
    ]
  }
]);

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import UpdateTask from './Dashboard/UpdateTask';
import UsingPeople from './Components/UsingPeople/UsingPeople';
import AboutUs from './Components/AboutUs/AboutUs';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
