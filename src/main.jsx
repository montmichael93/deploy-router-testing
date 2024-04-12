import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AboutPage } from './routes/About';
import { VideosPage } from './routes/Videos';
import { MessagePage } from './routes/Message';
import Root from "./routes/Root";

const router = createBrowserRouter([
  { 
  path: "/",
  element: <Root/>,
  children: [
    {
      children: [
        {
          path: 'about',
          element: <AboutPage/>, 
        },
        {
          path: 'videos',
          element: <VideosPage/>,
        },
        {
          path: 'message',
          element:<MessagePage/>, 
        },
      ],
    },
  ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
