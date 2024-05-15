import HomeCarousel from "../../../layouts/Carousel";
import ComingMovie from "../../../layouts/ComingMovie";
import Content from "../../../layouts/Content";
import NowShowing from "../../../layouts/NowShowing";


export default function HomePages() {
  return (
    <div className="container">
        
        <HomeCarousel/>
        <NowShowing/>
        <ComingMovie/>
        <Content/>
    </div>
  )
}
