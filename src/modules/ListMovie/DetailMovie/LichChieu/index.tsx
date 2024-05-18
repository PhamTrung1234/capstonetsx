


import dayjs from "dayjs";

import {  useAppSelector } from "../../../../store/hook";
import {  Spin } from "antd";
import { dataTheater } from "../../../../apis/CallApiRap";
import { Link } from "react-router-dom";




export default function Showtimes() {
  
  const theater:any = useAppSelector(state => state.endow.movieDettail)
  
  

  
  const {data,isPending,error} = dataTheater()
  const listTheater = data?.data.content
  
  
  const day = dayjs();
  const nextday = day.add(1, "day");

  const renderTheater = () => {
     if(theater){
       const listmovie = theater.content.heThongRapChieu
       
       return listmovie.map((item:any)=>{
        return item?.cumRapChieu.map((element:any)=>{
          return (
            <div className="row my-5" key={item.maHeThongRap}>
                <div className="col-md-3">
                  <img src={item.logo} alt="..." width={"100px"} />
                </div>
                <div className="col-md-9">
                  <p>{element.diaChi}</p>
                  {element?.lichChieuPhim.map((lich:any)=>{
                    return <Link key={lich.maLichChieu} className="text-white border py-2 px-4 mr-3 rounded-md" to={`/phim/rapchieu/${lich.maLichChieu}`}>
                        {dayjs(lich.ngayChieuGioChieu).format("hh : mm")} 
                    </Link>
                  })}
                </div>
            </div>
          )
        })
       })
     }
  };
  
  
 if(isPending || error || !theater) return <Spin/>
  return (
    <div className="text-white">
      <div className="flex justify-between border-b-4 pb-5">
        <div className="flex">
          <button className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {day.format("ddd")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
              {day.format("DD-MM")}
            </p>
          </button>
          <button className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ml-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {nextday.format("ddd")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
              {nextday.format("DD-MM")}
            </p>
          </button>
        </div>
        <div>
          <select className="text-dark">
            <option>Toàn quốc</option>
            <option>tp.Hồ chí minh</option>
            <option>Hà Nội</option>
            <option>Đà nẵng</option>
            <option>Huế</option>
            <option>Hải Phòng</option>
            <option>Quảng Ninh</option>
          </select>
          <select className="text-dark ml-3">
            <option>Tất cả rạp</option>
            {listTheater.map((item: any) => {
              return (
                <option key={item.maHeThongRap} value={item.maHeThongRap}>
                  {item.tenHeThongRap}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        {renderTheater()}
      </div>
    </div>
  );
}
