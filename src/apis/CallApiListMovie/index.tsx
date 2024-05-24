import { useQuery } from "@tanstack/react-query";

import api1 from "../apiUtil";



export const CallListMovie = async()=>{
    try{
        return await api1.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
    }catch(error:any){
        throw Error(error);
    }
}

export const dataListMovie = ()=>{
    return useQuery({queryKey:["list-data"],queryFn:CallListMovie})
}