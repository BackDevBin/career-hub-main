import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('FeaturedData.json')
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
    
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/job",
        element: <JobDetails></JobDetails>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      }
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
