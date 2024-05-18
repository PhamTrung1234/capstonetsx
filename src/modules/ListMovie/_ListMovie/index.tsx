import { Spin } from "antd";
import { dataListMovie } from "../../../apis/CallApiListMovie"
import { CurrentMovie } from "../../../types/types";
import { rendertitle } from "../../../root";
import { Outlet } from "react-router-dom";
export default function ListMovie() {
  const {isLoading,data,error} = dataListMovie();
  const renderMovie=()=>{
     return data?.data.content.map((item :CurrentMovie)=>{
        return  <div className="col-md-3" key={item.maPhim}>
        <div className="movie__item">
          <img
            
            width={"100%"}
            
            src={item.hinhAnh}
            alt="..."
          ></img>
          {rendertitle(item.trailer,`/phim/${item.maPhim}`)}
        </div>
        <p className="movie__text my-4 text-lg font-medium">{item.tenPhim}</p>
      </div>
     })
  }
  if(isLoading|| error) return <Spin/>
  return (
    <div className="container relative">
      <div className="row">
        {renderMovie()}
    </div>
      <Outlet/>
    </div>
  )
}
