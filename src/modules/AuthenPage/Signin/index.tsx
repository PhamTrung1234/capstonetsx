import {Typography} from "antd";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { getUserLogin } from "../../../apis/CallApiAdmin/movie";
const schema=yup.object({
  taiKhoan: yup.string().required("Vui long nhap tai khoan"),
  matKhau: yup.string().required("vui long nhap mat khau")
})

export default function Signin() {
  
  const navi=useNavigate();
  const {register,handleSubmit,formState} =useForm<any>({
    defaultValues:{taiKhoan:"",matKhau:""},
    resolver: yupResolver(schema),
    criteriaMode:"all"
  });
  
  const {mutate: handleLogin, isPending}=useMutation({
    mutationFn:(formValues:any)=>{
        return getUserLogin(formValues);
      
    },
    onSuccess:(data)=>{
      localStorage.setItem("user",JSON.stringify(data));
      if(data.maLoaiNguoiDung==="QuanTri"){
        return navi("/admin");
      }
      navi("/");
    },
    onError:(error)=>{
      navi("/auth/signin");
      return alert("Tài Khoản không tồn tại")}
  });
  // const data =useSelector((state:RootState)=>state.endow.currentUser)
 const onSubmit=(formValue: any)=>{
    handleLogin(formValue)
 }  
 
 
  return (
    <div className="w-[400px] ">
      <div className="my-4 text-center">
        <Typography className="font-bold text-3xl">Đăng nhập</Typography>
        <Typography className="mt-2">Hi, Chào mừng bạn quay lại 👋</Typography>
      </div>


<form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)} >
<div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Tài Khoản</label>
    <input type="text" {...register("taiKhoan")}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vui lòng nhập mật khẩu"  />
    {formState.errors.taiKhoan?.message &&(
            <small className="text-danger">
              {formState.errors.taiKhoan?.message as any}
            </small>
          )}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Mật Khẩu</label>
    <input type="password" {...register("matKhau")} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vui lòng nhập mật khẩu"  />
    {formState.errors.matKhau?.message &&(
            <small className="text-danger">
              {formState.errors.matKhau?.message as any}
            </small>
          )}     
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox"  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className="flex justify-center">
  <button disabled={isPending} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isPending && (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}Đăng Nhập</button>
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