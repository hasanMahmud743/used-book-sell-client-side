import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/blogs',
            element: <Blog></Blog>
        }
    ]
   }
])