import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Route, RouterProvider } from 'react-router-dom'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
