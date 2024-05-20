import { useQuery } from "@tanstack/react-query";
import {
  Breadcrumb,
  Button,
  Space,
  Table,
} from "antd";
import { getCinemaMovieApi} from "../../../apis/CallApiAdmin/movie";
// import { Cinema } from "../../../types/movie.type";
import { useNavigate } from "react-router-dom";
export default function CinemaManagement() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data,isLoading}=useQuery({
    queryKey: ["list-cinema"],
    queryFn: () => getCinemaMovieApi(),
  })
  
  const navigate=useNavigate();
  
  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      render: (key: string) => (
        <div>
          <img className="w-[80px] h-[80px] rounded object-cover" src={key} />
        </div>
      ),
    },
    {
      title: "Mã Hệ Thống Rạp",
      dataIndex: "maHeThongRap",
    },
    {
      title: "Tên Hệ Thống Rạp",
      dataIndex: "tenHeThongRap",
    },
    {
      title: "Bí Danh",
      dataIndex: "biDanh",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any) => (
        <Space size="middle">
          
          <Button type="primary"  
          onClick={()=>{
            return navigate("/cinema/detail");
          }}
          >Chi tiết</Button>
        </Space>
      ),
    },
    
   
  ];
  
 


  const mockData = data || [];
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
              path: "/admin",
            },
            {
              title: "Quản lý Hệ thống rạp",
            },
          ]}
        />
        
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách Rạp</h4>
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"maHeThongRap"}
          dataSource={mockData}
          pagination={false}
          loading={isLoading}
        />
        
      </div>
      

    </>
    
  );
}
