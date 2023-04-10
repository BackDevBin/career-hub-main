import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Catagories from './component/Catagories/Catagories';
import Header from './component/Header/Header';
import Statistics from './component/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/Statistics",
        element: <Statistics></Statistics> ,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
