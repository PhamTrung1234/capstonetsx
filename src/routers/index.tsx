import { Navigate, Outlet, useRoutes } from "react-router-dom";
import HomeTemplates from "../layouts/HomeTemplate";
import HomePages from "../modules/HomePages";
import ListMovie from "../modules/ListMovie/_ListMovie";
import Signin from "../modules/AuthenPage/Signin";
import Signup from "../modules/AuthenPage/Signup";
import AuthLayout from "../layouts/AuthenLayout";
import AdminLayout from "../layouts/AdminLayout";
import AccountSettings from "../modules/Admin/AccountSettings";
import CinemaManagement from "../modules/Admin/CinemaManagement";
import MovieManagement from "../modules/Admin/MovieManagement";
import UserManagement from "../modules/Admin/UserManagement";
import DetailMovie from "../modules/ListMovie/DetailMovie";
import ListMoviePages from "../modules/ListMovie";
import ListTheater from "../modules/ListTheater";
import ThanhVien from "../modules/ThanhVien";
import Ticketbooking from "../modules/ListMovie/DetailMovie/BookingChair";






export const useRouteElement = () => {
    const element = useRoutes([
      {
        path: "/",
        element: <HomeTemplates />,
        children: [
          {
            path: "",
            element: <HomePages />,
          },
          {
            path: "/phim",
            element: <ListMoviePages />,children:[
                {path:"/phim",element:<ListMovie/>},
                {path:"/phim/:id",element:<DetailMovie/>},
                {path:"/phim/rapchieu/:id1",element:<Ticketbooking/>}
                
                

            ]
          },
          {path:"/rap",element:<ListTheater/>},
          {path:"/thanhvien",element:<ThanhVien/>}
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/signin",
            element: <Signin />,
          },
          {
            path: "/auth/signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "/admin/user",
            element: <UserManagement />,
          },
          {
            path: "/admin/movie",
            element: <MovieManagement />,
          },
          {
            path: "/admin/cinema",
            element: <CinemaManagement />,
          },
          {
            path: "/admin/account-settings",
            element: <AccountSettings />,
          },
        ],
      },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
    ]);
    return element;
  };