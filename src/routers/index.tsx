import { useRoutes } from "react-router-dom";
import HomeTemplates from "../component/HomeTemplate";
import HomePages from "../component/HomeTemplate/HomePages";
import ListMovie from "../component/HomeTemplate/ListMovie";
import Signin from "../layouts/Signin";

export const userRouteLayout = ()=>{
    return useRoutes([
        {path:"",element:<HomeTemplates/>,children:[
            {path:"",element:<HomePages/>},
            {path:"/phim",element:<ListMovie/>}
        ]},
        {path:"/signin",element:<Signin/>}
    ])
}