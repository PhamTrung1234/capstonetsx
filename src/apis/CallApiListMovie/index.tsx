import { useQuery } from "@tanstack/react-query";
import api from "../apiUtil";



export const CallListMovie = async()=>{
    try{
        return await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
    }catch(error:any){
        throw Error(error);
    }
}

export const dataListMovie = ()=>{
    return useQuery({queryKey:["list-data"],queryFn:CallListMovie})
}