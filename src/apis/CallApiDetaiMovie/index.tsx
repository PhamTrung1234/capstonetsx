
import api1 from "../apiUtil"


export const getDetailMovie = async(id:string|undefined)=>{
    try{
        return await api1.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
    catch(error:any){
        throw Error(error)
    }
}
export const getDetaiTheater = async(id:string|undefined)=>{
    try{
        return await api1.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
    catch(error:any){
        throw Error(error);
    }
}

