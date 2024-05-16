import { useRoutes } from "react-router-dom";
import HomeTemplates from "../layouts/HomeTemplate";
import HomePages from "../modules/HomePages";
import ListMovie from "../modules/ListMovie";
import Signin from "../modules/AuthenPage/Signin";
import Signup from "../modules/AuthenPage/Signup";
import AuthLayout from "../layouts/AuthenLayout";


export const userRouteLayout = ()=>{
    return useRoutes([
        {path:"",element:<HomeTemplates/>,children:[
            {path:"",element:<HomePages/>},
            {path:"/phim",element:<ListMovie/>}
        ]},
        {path:"/auth",element:<AuthLayout/>,children:[
            {path:"/auth/signin",element:<Signin/>},
            {path:"/auth/signup",element:<Signup/>}
        ]}
       
        
    ])
}