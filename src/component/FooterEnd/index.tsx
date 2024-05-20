import { Link } from "react-router-dom"

import {memo} from "react"

 function FooterEnd() {
  
  return (
    <div className="py-3 mt-5 footer__end relative">
        <div className="container">
        <div className="row align-items-center ">
            <div className="col-md-2">
            <Link to={"/"} className="logo text-white">
                    <span className="mt-2">tieusau</span>
          <span>
            <i className="fa-solid fa-film ml-2" />
          </span>
                    </Link> 
            </div>
            <div className="col-md-6 text-white ">
                <p className="mb-0 uppercase">công ty cổ phần 2 thành viên tiêu sầu</p>
                <p className="mb-0">Địa chỉ: xóm bài tập phường tự phát tỉnh tự quản lý</p>
                <ul className="pl-0">
                    <li className="mr-3"><Link to={"/"}>
                    <i className="fa-solid fa-phone mr-1"></i>
                    <span>0937864533</span>
                        </Link></li>
                    <li><Link to={"/"}>
                    <i className="mr-1 fa-solid fa-envelope"></i>
                        <span>tieusau@gmail.com</span></Link></li>
                    
                </ul>
            </div>
        </div>
        </div>
      </div>
  )
}

export default memo(FooterEnd);