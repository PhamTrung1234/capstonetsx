import { Outlet ,Link} from "react-router-dom";

export default function AuthLayout() {
  
  
  return (
    <div className="w-full h-screen flex items-center signin justify-center bg-[#f5f5f5] ">
      <div className="bg-white rounded-2xl p-8">
         <div className="flex justify-center">
         <Link  to={"/"} className="logo">
    <span className="mt-2">tieusau</span>
          <span>
            <i className="fa-solid fa-film ml-2" />
          </span>
    </Link>
         </div>
        <Outlet />
      </div>
    </div>
  );
}