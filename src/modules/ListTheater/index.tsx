
import { dataTheater } from '../../apis/CallApiRap'
import { Spin } from 'antd';

export default function ListTheater() {
    const {isPending,data,error} = dataTheater();
    const renderTheater = ()=>{
        return data?.data.content.map((item:any)=>{
            return (
                <div key={item.logo} className="row items-center mb-5 text-white text-3xl uppercase">
                    <div className="col-md-4">
                        <img src={item.logo} alt="..." width={"100px"} />
                    </div>
                    <div className="col-md-8">
                        <span>{item.tenHeThongRap}</span>
                    </div>
                </div>
            )
        })
    }
    if(isPending || error) return <Spin/>
  return (
    <div className='relative container'>
        <div className='text-white my-5 text-2xl'>
            <p>Hệ thống đặt vé xem phim <span className='text-rose-600 font-bold text-3xl'>TIEUSAU</span> rất vui lòng được đồng hành và hợp tác cùng các rạp chiếu lớn trên toàn quốc </p>
            <p>* trang web chỉ mang tính giải trí và học tập</p>
        </div>
        {renderTheater()}
    </div>
  )
}

