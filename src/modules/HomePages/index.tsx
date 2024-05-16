import HomeCarousel from "./Carousel";
import ComingMovie from "./ComingMovie";
import Content from "./Content";
import NowShowing from "./NowShowing";


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
