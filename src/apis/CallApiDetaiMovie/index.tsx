
import api from "../apiUtil"

export const getDetailMovie = async(id:string|undefined)=>{
    try{
        return await api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
    catch(error:any){
        throw Error(error)
    }
}
export const getDetaiTheater = async(id:string|undefined)=>{
    try{
        return await api.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
    catch(error:any){
        throw Error(error);
    }
}

