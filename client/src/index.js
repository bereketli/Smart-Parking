import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css';
import App from './App';
import Signin from './pages/sign in/Signin';
import SignUp from './pages/sign up/SignUp';
import Authenticated from './pages/sign in/Authenticated';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Signin/>
  },
  {
    path: "/signup",
    element: <SignUp/>

  },
  {
    path:"/authenticated",
    element:<Authenticated/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
