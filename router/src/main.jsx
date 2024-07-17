import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import Layout from './component/Layout.jsx'
import Home from "./component/Home.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import GitHub from './component/GitHub.jsx'

// const router=createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },{
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   }
// ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="github" element={<GitHub/>}/>      
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
