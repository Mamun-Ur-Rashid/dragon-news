import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/news/News";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Category from "../pages/Home/Category/Category";
import PrivateRoute from "./PrivateRoute";
import Turms from "../Shared/turms";


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
            },
            {
                path:'/turms',
                element: <Turms></Turms>
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
                loader: ({params}) => fetch(`https://dagon-news-server-mamun-ur-rashid.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path:':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dagon-news-server-mamun-ur-rashid.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;