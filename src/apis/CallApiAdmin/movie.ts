import { Banner, Cinema, DataMovieListPagination, DataUserPagination} from "../../types/movie.type"
import { ResponseApi } from "../../types/types";

import { PAGE_SIZE } from "../../constants";
import api1 from "../apiUtil";


export const getBannerMovieApi = async () => {
  try {
    const response = await api1.get<ResponseApi<Banner[]>>(
      "/QuanLyPhim/LayDanhSachBanner"
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const addMovieApi = async (payload: FormData) => {
  try {
    const response = await api1.post("/QuanLyPhim/ThemPhimUploadHinh", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const getListMovieApi = async (currentPage: number) => {
  try {
    const response = await api1.get<ResponseApi<DataMovieListPagination>>(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${currentPage}&soPhanTuTrenTrang=${PAGE_SIZE}`
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const getUserList = async (currentPage: number) => {
  try {
    const response = await api1.get<ResponseApi<DataUserPagination>>(
      `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP03&soTrang=${currentPage}&soPhanTuTrenTrang=${PAGE_SIZE}`
    );
    
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};
export const addUserApi = async (payload:any) => {
  try {
    const response = await api1.post("/QuanLyNguoiDung/ThemNguoiDung", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const UpdateUserApi = async (payload:any) => {
  try {
    const response = await api1.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
export const DeleteUserApi = async (TaiKhoan:string) => {
  try {
    const response = await api1.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const getCinemaMovieApi = async () => {
  try {
    const response = await api1.get<ResponseApi<Cinema[]>>(
      "/QuanLyRap/LayThongTinHeThongRap"
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const UpdateMovieApi = async (payload:FormData) => {
  try {
    const response = await api1.post("/QuanLyPhim/CapNhatPhimUpload", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
export const DeleteMovieApi = async (MaPhim:number) => {
  try {
    const response = await api1.delete(`/QuanLyPhim/XP?MaPhim=${MaPhim}`);

    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
export const getUserLogin = async (user:{taiKhoan:string,matKhau:string|number}) => {
  try {
    const response = await api1.post(
      "/QuanLyNguoiDung/DangNhap",user
    );
   
    return response.data.content;
  } 
  catch (error: any) {
  throw Error(error);
  }
};