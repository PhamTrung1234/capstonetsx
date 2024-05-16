import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="container relative pt-20">
      <div className="row align-items-center" >
        <div className="col-md-9">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <Link to={"/"} className="logo fs-1">
                    <span className="mt-2">tieusau</span>
          <span>
            <i className="fa-solid fa-film ml-2" />
          </span>
                    </Link>
                </div>
                <div className="col-md-8">
                    <p className="text-white text-2xl">
                        <span className="uppercase">tieusau|trang đặt vé chất lượng cao</span>
                        <br />
                        Trang web giải trí với một bộ sưu tập phim đa dạng và chất lượng cao.

Giao diện trực quan và dễ sử dụng, dễ dàng tìm kiếm và xem các bộ phim hot nhất từ nhiều thể loại.

Hãy khám phá và tận hưởng những giây phút giải trí không giới hạn!
<br />
* Trang web được xây dựng nhằm mục đích nghiên cứu và học tập.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-3 text-white">
            <ul className="footer__nav">
                <li className="footer__hover"><Link to={"/"}>Báo Lỗi</Link></li>
                <li className="footer__hover"><Link to={"/"}>Liên hệ</Link></li>
                <li className="footer__hover"><Link to={"/"}>Yêu cầu phim</Link></li>
                <li className="footer__hover"><Link to={"/"}>Danh sách phim</Link></li>
                <li className="footer__hover"><Link to={"/"}>Mạng xã hội</Link></li>
                <ul className="footer__icon">
                    <li><Link to={"/"}><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to={"/"}>
                    <i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link to={"/"}>
                    <i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
                
            </ul>
        </div>
      </div>
      
    </div>
  )
}
