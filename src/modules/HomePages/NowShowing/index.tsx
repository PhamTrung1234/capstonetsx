import { dataListMovie } from "../../../apis/CallApiListMovie";

import { renderheading, renderMovieinfo } from "../../../root";

import { Spin } from 'antd';





import { CurrentMovie } from "../../../types/types";


export default function NowShowing() {
  const { isLoading, data ,error} = dataListMovie()
  
  if (isLoading || error)
    return (
      <Spin/>
    );
    let found = 0;
    const rendermovie = () => {
      return data?.data.content.map((item: CurrentMovie) => {
        const result = renderMovieinfo(found, item.dangChieu, item.maPhim, item.hinhAnh, item.tenPhim, item.trailer);
        if (item.dangChieu) found++;
        return result;
      }).filter(Boolean);
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
