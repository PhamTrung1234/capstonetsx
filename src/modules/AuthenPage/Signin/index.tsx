import {Typography} from "antd";
import { Link } from "react-router-dom";



export default function Signin() {
 
  
  
  return (
    <div className="w-[400px] ">
      <div className="my-4 text-center">
        <Typography className="font-bold text-3xl">Đăng nhập</Typography>
        <Typography className="mt-2">Hi, Chào mừng bạn quay lại 👋</Typography>
      </div>

     

<form className="max-w-sm mx-auto">
<div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Tài Khoản</label>
    <input type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vui lòng nhập mật khẩu" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Mật Khẩu</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vui lòng nhập mật khẩu" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox"  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className="flex justify-center">
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng Nhập</button>
  </div>
</form>




      <Typography className="mt-8 text-center">
        Chưa có tài khoản?{" "}
        <Link to={"/auth/signup"} className="text-blue-700 font-medium cursor-pointer" >
          Tạo tài khoản
        </Link>
      </Typography>
    </div>
  );
}