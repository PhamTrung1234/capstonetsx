import { Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  DataUSer,
  getListUserAll,
  postListUser,
} from "../../../apis/CallApiListUser";
import {message} from "antd"
type User = {
  email: string;
  hoTen: string;
  maLoaiNguoiDung:string;
  matKhau: string;
  soDT: string;
  taiKhoan:string;
};

export default function Signup() {
  const [errorPW, setError] = useState("");
  const [errorTK, setErrorTk] = useState("");
  const [errorEmail, setemail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      hoTen: "",
      soDt: "",
      taiKhoan: "",
      email: "",
      matKhau: "",
      rematKhau: "",
    },
  });
  const [messageApi] = message.useMessage();
  const { isPending, data, error } = useQuery({
    queryKey: ["listuser"],
    queryFn: getListUserAll,
  });

  const { mutate: handeluser } = useMutation({
    mutationFn: (formData: DataUSer) => {
      return postListUser(formData)
    },
    onSuccess: () => {
      messageApi.open({
        type: 'success',
        content: 'Đăng ký thành công',
      })
    },
    onError: () => {
      
    },
  });
  
  
  const onSubmitChange = (value: any) => {
    
    if (value.matKhau !== value.rematKhau) {
      setError("nhắc lại mật khẩu không trùng với mật khẩu");
    } else {
      setError("");
    }
    
    if (data) {
     const index = data?.data.content.filter((item: User) => {
        return item.taiKhoan === value.taiKhoan;
      });
    const  position = data?.data.content.filter((item: User) => {
        return item.email === value.email;
      });
      if (!index || index.length <= 0) {
        setErrorTk("");
      } else {
        setErrorTk("tài khoản đã tồn tại");
      }
      if (!position || position.length <= 0) {
        setemail("");
      } else {
        setemail("email đã tồn tại");
      }
      
    }
   
    const formData = {
      hoTen: value.hoTen,
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
      email: value.email,
      soDt: value.soDt,
      maNhom: "GP03",
    };

    handeluser(formData)
  };
  
  if (isPending || error) return <Spin />;
  return (
    <div className="w-[400px]">
      <div className="my-4 text-center">
        <Typography className="font-bold text-3xl">Tạo tài khoản</Typography>
        <Typography className="mt-2 text-center">
          Bạn đã có tài khoản?{" "}
          <Link
            to={"/auth/signin"}
            className="text-blue-700 font-medium cursor-pointer"
          >
            Đăng nhập
          </Link>
        </Typography>
      </div>

      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmitChange)}
      >
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Họ và tên
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("hoTen", {
              pattern:
                /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            })}
          />
          {errors.hoTen?.type && (
            <span className="text-red-600">
              * Vui lòng nhập lại thông tin họ tên của quý khách
            </span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Số điện thoại
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("soDt", {
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            })}
          />
          {errors.soDt?.type && (
            <span className="text-red-600">
              Số điện thoại bạn nhập chưa chính xác
            </span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Tên tài khoản
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("taiKhoan", { required: true, maxLength: 50 })}
          />
          {errorTK && <span className="text-red-600">{errorTK}</span>}
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Địa chỉ email
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type &&
            (<span className="text-red-600">Email không đúng định dạng</span>)}
          {(errorEmail && (
                <span className="text-red-600">{errorEmail}</span>
              ))}
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("matKhau", {
              required: true,
              maxLength: 50,
              minLength: 5,
            })}
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            * Nhắc lại mật khẩu
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            {...register("rematKhau", {
              required: true,
              maxLength: 50,
              minLength: 5,
            })}
          />
          {errorPW && <span className="text-red-600">{errorPW}</span>}
        </div>
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tôi đồng ý với{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Điều khoản và điều kiện
            </a>
          </label>
        </div>
        <div className="flex justify-center">
          <button
          
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tạo tài khoản mới
          </button>
        </div>
      </form>
    </div>
  );
}
