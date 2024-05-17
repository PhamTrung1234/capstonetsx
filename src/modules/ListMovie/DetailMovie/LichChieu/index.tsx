import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetaiTheater } from "../../../../apis/CallApiDetaiMovie";
import { Spin } from "antd";
import dayjs from "dayjs";
import { dataTheater } from "../../../../apis/CallApiRap";

export default function Showtimes() {
  const { id } = useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ["detail-theater"],
    queryFn: () => {
      return getDetaiTheater(id);
    },
  });
  
  const theater = data?.data.content.heThongRapChieu;
  const newDataTheater = dataTheater()
  const listTheater = newDataTheater.data?.data.content
  
  const day = dayjs();
  const nextday = dayjs().add(1, "day");

  if (isPending || error || newDataTheater.isPending || newDataTheater.error) return <Spin />;
  return (
    <div className="text-white">
      <div className="flex justify-between border-b-4 pb-5">
        <div className="flex">
          <button className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {day.format("ddd")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
              {day.format("DD-MM")}
            </p>
          </button>
          <button className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ml-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {nextday.format("ddd")}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
              {nextday.format("DD-MM")}
            </p>
          </button>
        </div>
        <div>
            <select className="text-dark">
                <option>Toàn quốc</option>
                <option>tp.Hồ chí minh</option>
                <option >Hà Nội</option>
                <option >Đà nẵng</option>
                <option >Huế</option>
                <option >Hải Phòng</option>
                <option >Quảng Ninh</option>
            </select>
            <select className="text-dark ml-3">
                <option >Tất cả rạp</option>
                {listTheater.map((item:any)=>{
                    return (
                        <option key={item.maHeThongRap} value={item.maHeThongRap}>
                            {item.tenHeThongRap
}
                        </option>
                    )
                })}
            </select>
        </div>
      </div>
      
    </div>
  );
}
