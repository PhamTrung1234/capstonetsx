import { Banner } from "../../types/banner.type";
import { ResponseApi } from "../../types/types";
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