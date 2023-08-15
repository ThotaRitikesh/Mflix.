import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter ,RouterProvider,
} from "react-router-dom";
import App from "./App";
import Body from "./Components/Body";
import Context from "./utiles/context";
import MovieDetails from "./Components/MovieDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body  />,
      },
      {
        path: "/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);

