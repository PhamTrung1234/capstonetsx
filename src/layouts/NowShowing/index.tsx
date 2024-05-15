import { dataListMovie } from "../../apis/CallApiListMovie";

import { rendertitle,renderheading } from "../../root";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Spin } from 'antd';
import "../../../node_modules/jquery";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/owl.carousel.min.js";

import { CurrentMovie } from "../../types/types";


export default function NowShowing() {
  const { isLoading, data ,error} = dataListMovie()
  
  if (isLoading || error)
    return (
      <Spin/>
    );
  const rendermovie = () => {
    return data?.data.content.map((item: CurrentMovie) => {
      if (item.dangChieu)
        return (
          <div key={item.maPhim}>
            <div className="movie__item">
              <img
                
                width={"100%"}
                
                src={item.hinhAnh}
                alt="..."
              ></img>
              {rendertitle(item.trailer,"/")}
            </div>
            <p className="movie__text text-lg mt-4 font-medium">{item.tenPhim}</p>
          </div>
        );
    });
  };

  return (
    <div className="pt-20 pb-0">
       {renderheading("đang chiếu","/")}
      <OwlCarousel
      className="owl-theme "
      loop={true}
      nav={false}
      margin={24}
      dots={false}
      responsive={{ 0: { items: 1 }, 1000: { items: 4 } }}
    >
      {rendermovie()}
    </OwlCarousel>
    </div>
  );
}
