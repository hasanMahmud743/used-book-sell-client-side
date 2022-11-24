import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllOrders from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProduct/MyProducts";
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
        path: '/dashboard/allusers',
        element: <AllOrders></AllOrders>,
        loader: ()=> fetch('http://localhost:6500/orders')
       },
       {
        path: '/dashboard/addproducts',
        element: <AddProduct></AddProduct>
       
       },
       {
        path: '/dashboard/myproduct',
        element: <MyProducts></MyProducts>,
        loader: ()=> fetch('http://localhost:6500/products')
       },
       {
        path: '/dashboard/allseller',
        element: <AllSeller></AllSeller>,
        loader: ()=> fetch('http://localhost:6500/allSeller')
       },
       {
        path: '/dashboard/allbuyer',
        element: <AllBuyer></AllBuyer>,
        loader: ()=> fetch('http://localhost:6500/allBuyer')
       },
    ]
   }
])