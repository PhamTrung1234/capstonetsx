import { Carousel } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getBannerMovieApi } from "../../../apis/CallApiBanner";


export default function HomeCarousel() {
  const { isLoading, data} = useQuery({
    queryKey: ["banner"],
    queryFn: getBannerMovieApi,
  });
  
  const rendercarousel = () => {
    return data?.map(item=> {
      return (
        <div key={item.maPhim}>
          <img width={"100%"}   className=" img-max-height" src={item.hinhAnh} alt="..." />
        </div>
      );
    });
  };
  if (isLoading)
    return (
      <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  
  return (
    <div >
      <Carousel autoplay  >
        {rendercarousel()}
      </Carousel>
    </div>
  );
}
