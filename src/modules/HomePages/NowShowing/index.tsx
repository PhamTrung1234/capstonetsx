import { dataListMovie } from "../../../apis/CallApiListMovie";

import { rendertitle,renderheading } from "../../../root";

import { Spin } from 'antd';





import { CurrentMovie } from "../../../types/types";


export default function NowShowing() {
  const { isLoading, data ,error} = dataListMovie()
  let found = 0; 
  if (isLoading || error)
    return (
      <Spin/>
    );
  const rendermovie = () => {
    return data?.data.content.map((item: CurrentMovie) => {
      if (item.dangChieu){
         found ++;
         if(found<=4){
          return (
            
              <div className="col-md-3" key={item.maPhim}>
              <div className="movie__item">
                <img
                  
                  width={"100%"}
                  
                  src={item.hinhAnh}
                  alt="..."
                ></img>
                {rendertitle(item.trailer,"/phim")}
              </div>
              <p className="movie__text text-lg mt-4 font-medium">{item.tenPhim}</p>
            </div>
           
          );
         }
      }
        
    });
  };

  return (
    <div className="pt-20 pb-0 relative">
       {renderheading("đang chiếu","/phim")}
      <div className="row">
         {rendermovie()}
      </div>
    </div>
  );
}
