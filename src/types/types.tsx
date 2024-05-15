export type ResponseApi<T> = {
    statusCode: number;
    message: string;
    content: T;
    dateTime: string;
    messageConstants: any;
  };

  export type CurrentMovie={
    maPhim:number;
    tenPhim:string;
    biDanh:string;
    trailer:string;
    hinhAnh:string;
    moTa:string;
    maNhom:string;
    ngayKhoiChieu:string;
    danhGia:number;
    hot:boolean;
    dangChieu:boolean;
    sapChieu:boolean;
  }
