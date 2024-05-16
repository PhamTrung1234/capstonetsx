import { dataListMovie } from "../../../apis/CallApiListMovie";

import { rendertitle,renderheading } from "../../../root";

import { Spin } from 'antd';


import { CurrentMovie } from "../../../types/types";



export default function ComingMovie() {
  const {isLoading,data,error} = dataListMovie()
  let found = 0;
  const rendermovie = ()=>{
     return data?.data.content.map((item:CurrentMovie)=>{
          if(item.sapChieu){
            found++;
            if(found<=4){
              return(
              
                  <div className="col-md-3" key={item.maPhim}>
            <div className="movie__item">
              <img
                
                width={"100%"}
                
                src={item.hinhAnh}
                alt="..."
              ></img>
              {rendertitle(item.trailer,"/phim")}
            </div>
            <p className="movie__text mt-4 text-lg font-medium">{item.tenPhim}</p>
          </div>
              
            )
            }
          }
     })
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
