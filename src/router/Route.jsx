import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home"
import Favorite from "../component/Header/Favorite/Favorite"
import Login from "../component/Header/Login/Login"
import ErrorPage from "../pages/errorPage"
import Phone from "../pages/Phone"

const myCreateRoute= createBrowserRouter([
    {
    path: "/",
    element: <MainLayout></MainLayout>, 
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('/phones.json')
        },
        {
            path:"/favorite",
            element:<Favorite></Favorite>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/phones/:id",
            element:<Phone></Phone>,
            loader: ()=> fetch('/phones.json')
        }
    ]
    }
])

export default myCreateRoute
   
