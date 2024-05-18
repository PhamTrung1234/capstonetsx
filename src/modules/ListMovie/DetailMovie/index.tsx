import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailMovie,getDetaiTheater } from "../../../apis/CallApiDetaiMovie";
import dayjs from "dayjs";

import {  Spin } from "antd";
import Showtimes from "./LichChieu";
import { useAppDispatch } from "../../../store/hook";
import { setMovieDetail } from "../../../store/slice";

export default function DetailMovie() {
  const { id } = useParams();
  const { isPending, data, error } = useQuery({
    queryKey: ["detail-movie"],
    queryFn: () => {
      return getDetailMovie(id);
    },
  });
  const theater  = useQuery({
    queryKey: ["detail-theater"],
    queryFn: () => {
      return getDetaiTheater(id);
    },
  });
  
  const dispatch = useAppDispatch();
  dispatch(setMovieDetail(theater.data?.data))
  
  

  const detailMovie = data?.data.content;
  const duration = theater.data?.data.content.heThongRapChieu[0]?.cumRapChieu[0].lichChieuPhim[0].thoiLuong
  ;
  
  const date = dayjs(detailMovie?.ngayKhoiChieu).format("DD-MM-YYYY");
  
  if (isPending || error || theater.isPending || theater.error) return <Spin />;
  return (
    <div className="relative container detai__movie">
      <div className="row ">
        <div className="col-md-4 ">
          <img className="rounded-xl listmovie__img"  src={detailMovie?.hinhAnh} alt="..." />
        </div>
        <div className="col-md-8 ">
          <p className="text-white text-2xl uppercase mb-5">
            <span className="font-bold mr-3">Tên Phim: </span>
            {detailMovie?.tenPhim}
          </p>
          <p className="text-white text-2xl mb-5">
            <span className="font-bold uppercase mr-3">
              ngày chiếu : </span>
             {date}
          </p>
          <p className="text-orange-500 text-2xl mb-5">
            <span className="mr-3">
            <i className="fa-solid fa-star"></i>
            </span>
            {detailMovie?.danhGia}  ({detailMovie?.maPhim} view)
          </p>
          <p className="text-white text-2xl mr-3 mb-5">
            <span className="font-bold uppercase">Quốc gia :  </span>
            Âu- Mỹ
          </p>
          <p className="text-white text-2xl mb-5">
            <span className="font-bold uppercase mr-3">
                thể loại :  
            </span>
            Hành động
          </p>
          <p className="text-white text-2xl">
            <span className="font-bold uppercase mr-3">
              thời lượng : 
            </span>
            <span>{duration ? duration: "120"}</span>
            <span>p</span>
          </p>
        </div>
      </div>
      <div className="text-white my-20">
        <h3 className="border-l-8 pl-3 uppercase">Nội dung</h3>
        <p className="mt-5 text-2xl">{detailMovie.moTa}</p>
      </div>
      <Showtimes/>
    </div>
  );
}
