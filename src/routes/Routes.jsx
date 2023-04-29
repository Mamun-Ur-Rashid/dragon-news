import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/news/News";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Category from "../pages/Home/Category/Category";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayouts></LoginLayouts>,
        children:[
            {
                path:'/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'category',
        element: <Main></Main>,
        children:[
            
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path:':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;