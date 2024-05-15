import { NavLink, Link } from "react-router-dom";

type NavBar2 = {
  to: string;
  element: string;
};
const navbar: NavBar2[] = [
  { to: "/", element: "Trang chủ" },
  { to: "/phim", element: "Phim" },
  { to: "/rap", element: "Rạp Chiếu" },
  { to: "/thanhvien", element: "Thành Viên" },
  { to:"/",element:"Sign in"}
];

export const rendernavbar = () => {
  return navbar.map((item) => {
    return (
      <li key={item.to}>
        <NavLink
          to={item.to}
          className={"block py-2 px-3 text-white  md:p-0"}
        >
          {item.element}
        </NavLink>
      </li>
    );
  });
};

export const rendertitle = (trailer: string, href: string) => {
  return (
    <div className="title flex justify-center flex-col  items-center">
      <Link to={href} className="title__datve  flex items-center mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-camera-reels"
          viewBox="0 0 16 16"
        >
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
          <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
        <span className="ml-2">Đặt Vé</span>
      </Link>
      <Link to={trailer} className="flex items-center title__datve mt-1">
        <i className="fa-solid fa-play"></i>
        <span className="ml-2">Trailer</span>
      </Link>
    </div>
  );
};

export const renderheading = (heading: string, href: string) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center mb-3">
        <span className="border-l-8 pl-4 font-bold text-2xl mr-10 uppercase text-white z-10">
          phim
        </span>
        <span className="uppercase text-white z-10 font-bold">{heading}</span>
      </div>
      <Link to={href} className="flex items-center">
        <span className="text-white z-10 text-lg ">xem thêm</span>
        <i className="fa-solid fa-angle-right text-white z-10 mt-1 pl-5"></i>
      </Link>
    </div>
  );
};
