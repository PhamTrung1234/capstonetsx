import { Banner, Cinema, DataMovieListPagination, DataUserPagination} from "../../types/movie.type"
import { ResponseApi } from "../../types/types";
import api from "../apiUtil";
import { PAGE_SIZE } from "../../constants";

export const getBannerMovieApi = async () => {
  try {
    const response = await api.get<ResponseApi<Banner[]>>(
      "/QuanLyPhim/LayDanhSachBanner"
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const addMovieApi = async (payload: FormData) => {
  try {
    const response = await api.post("/QuanLyPhim/ThemPhimUploadHinh", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const getListMovieApi = async (currentPage: number) => {
  try {
    const response = await api.get<ResponseApi<DataMovieListPagination>>(
      `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${PAGE_SIZE}`
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const getUserList = async (currentPage: number) => {
  try {
    const response = await api.get<ResponseApi<DataUserPagination>>(
      `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${PAGE_SIZE}`
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};
export const addUserApi = async (payload:any) => {
  try {
    const response = await api.post("/QuanLyNguoiDung/ThemNguoiDung", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const UpdateUserApi = async (payload:any) => {
  try {
    const response = await api.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
export const DeleteUserApi = async (TaiKhoan:string) => {
  try {
    const response = await api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

export const getCinemaMovieApi = async () => {
  try {
    const response = await api.get<ResponseApi<Cinema[]>>(
      "/QuanLyRap/LayThongTinHeThongRap"
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

export const UpdateMovieApi = async (payload:FormData) => {
  try {
    const response = await api.post("/QuanLyPhim/CapNhatPhimUpload", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
export const DeleteMovieApi = async (TaiKhoan:string) => {
  try {
    const response = await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${TaiKhoan}`);

    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};