import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import "./index.css";
import Layout from "./layout.jsx";
import Home from "./componenets/home.jsx";
import About from "./componenets/about.jsx";
import Contact from "./componenets/contact.jsx";
import User from "./componenets/User";
import GitHub, { githubInfoLoader } from "./componenets/Github/github";
import Project from "./componenets/project/project";
import Block from "./componenets/Block/block";
// import Project from "./componenets/project/or";



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//       path: "",
//       element: <Home/>,
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path="contact" element = {<Contact/>}/>
      <Route path="project" element = {<Project/>}/>
      <Route path="block" element = {<Block/>}/>
      <Route path="user/:userid" element = {<User/>}/>
      <Route
      loader={githubInfoLoader}
       path="github" 
       element = {<GitHub/>}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
