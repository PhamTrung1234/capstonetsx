
import { useAppSelector } from "../../../store/hook"


export default function Content() {
    const data = useAppSelector(state=>state.endow.thongTinUuDai)
    
    const renderendow = ()=>{
        return data?.map((item,index)=>{
            return(
                <div key={index} className="movie__item endow__item z-10  col-12 col-md-6 col-xl-3">
                    <img width={"100%"}  src={item.hinhAnh} alt="..." />
                    <p className="text-center text-white pt-4 text-2xl">{item.noiDung}</p>
                </div>
            )
        })
    }
  return (
    <div className="pt-20">
        <h3 className="border-l-8 pl-4 font-bold text-2xl mr-10 uppercase text-white relative mb-3">Ưu đãi siêu khủng khiếp</h3>
        <div className="row ">
       {renderendow()}
    </div>
    </div>
  )
}
