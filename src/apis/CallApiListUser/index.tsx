import api from "../CallApiAdmin/apiUtil"

export type DataUSer ={
    taiKhoan: string,
  matKhau: string,
  email: string,
  soDt: string,
  maNhom: string,
  hoTen: string
}

export const getListUserAll = async()=>{
    try{
        return api.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00")
    }catch(error:any){
        throw Error(error)
    }
}

export const postListUser = async(user:any)=>{
    try{
        const response  = await api.post("/QuanLyNguoiDung/DangKy",user)
        return response.data.content;
    }
    catch(error:any){
        return error;
    }
}