import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blogs/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductCategories from "../Pages/ProductCategories/ProductCategories";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/categories/:title',
            element: <ProductCategories></ProductCategories>,
            loader: ({params})=> fetch(`http://localhost:6500/categories/${params.title}`)
            

        },
        {
            path: '/blogs',
            element: <Blog></Blog>
        }
    ],
  
   },
   {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
        {
            
        }
    ]
   }
])