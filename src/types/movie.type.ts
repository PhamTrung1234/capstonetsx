export type Banner = {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
};

export interface DataMovieListPagination {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Movie[];
}

export interface Movie {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

export interface DataUserPagination {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: User[];
}

export interface User {
  taiKhoan:        string;
  matKhau:         string;
  email:           string;
  soDt:            string;
  maNhom:          null;
  maLoaiNguoiDung: MaLoaiNguoiDung;
  hoTen:           string;
}

export enum MaLoaiNguoiDung {
  KhachHang = "KhachHang",
  QuanTri = "QuanTri",
}
export interface Cinema {
  maHeThongRap:  string;
  tenHeThongRap: string;
  biDanh:        string;
  logo:          string;
}
export interface Ticket {
  hang:        string;
  danhSachGhe: DanhSachGhe[];
}

export interface DanhSachGhe {
  soGhe:  string;
  daDat?: boolean;
}