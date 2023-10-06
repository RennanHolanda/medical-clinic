import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './routes/Home';
import About from './routes/About';
import Specialty from './routes/Specialty';
import ErrorPage from './routes/ErrorPage';
import Contact from './routes/Contact';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/specialty",
        element:<Specialty />,
      },{
        path: "/contact",
        element:<Contact />,
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

