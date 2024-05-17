import { useQuery } from "@tanstack/react-query";
import api from "../apiUtil"

export const getTheater = async()=>{
    try{
        return await api.get("/QuanLyRap/LayThongTinHeThongRap")
    }
    catch(error:any){
        throw Error(error);
    }
}


export const dataTheater = ()=>{
    return useQuery({
        queryKey:["theater"],
        queryFn:getTheater
    })
} 