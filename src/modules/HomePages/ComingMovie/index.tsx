import { dataListMovie } from "../../../apis/CallApiListMovie";

import { rendertitle,renderheading, renderMovieinfo } from "../../../root";

import { Spin } from 'antd';


import { CurrentMovie } from "../../../types/types";



export default function ComingMovie() {
  const {isLoading,data,error} = dataListMovie()
  let found = 0;
  const rendermovie = ()=>{
     return data?.data.content.map((item: CurrentMovie) => {
      const result = renderMovieinfo(found, item.dangChieu, item.maPhim, item.hinhAnh, item.tenPhim, item.trailer);
      if (item.sapChieu) found++;
      return result;
    }).filter(Boolean);
  }
  if(isLoading||error) return <Spin/>
  return (
    <div className="pt-20 relative">
        {renderheading("sắp chiếu","/phim")}
       <div className="row">
           {rendermovie()}
       </div>
    </div>
  )
}
