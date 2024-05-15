import { dataListMovie } from "../../apis/CallApiListMovie";

import { rendertitle,renderheading } from "../../root";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Spin } from 'antd';
import "../../../node_modules/jquery";
import OwlCarousel from "react-owl-carousel";
import { CurrentMovie } from "../../types/types";



export default function ComingMovie() {
  const {isLoading,data,error} = dataListMovie()
  const rendermovie = ()=>{
     return data?.data.content.map((item:CurrentMovie)=>{
          if(item.sapChieu){
            return(
                <div key={item.maPhim}>
            <div className="movie__item">
              <img
                
                width={"100%"}
                
                src={item.hinhAnh}
                alt="..."
              ></img>
              {rendertitle(item.trailer,"/")}
            </div>
            <p className="movie__text mt-4 text-lg font-medium">{item.tenPhim}</p>
          </div>
            )
          }
     })
  }
  if(isLoading||error) return <Spin/>
  return (
    <div className="pt-20">
        {renderheading("sắp chiếu","/")}
       <OwlCarousel
       nav={false}
       loop={true}
       dots={false}
       margin={24}
       responsive={{0:{items:1},1000:{items:4}}}
       className="owl-theme"
       >
         {rendermovie()}
       </OwlCarousel>
    </div>
  )
}
