import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Breadcrumb,
  Button,
  Col,
  Input,
  Modal,
  Pagination,
  Popconfirm,
  Row,
  Form,
  Space,
  Table,
  Tag,
} from "antd";
import { DeleteUserApi, UpdateUserApi, addUserApi, getUserList } from "../../../apis/CallApiAdmin/movie";
import { useState } from "react";
import { PAGE_SIZE } from "../../../constants";
import { Controller, useForm } from "react-hook-form";
import { User } from "../../../types/movie.type";


export default function UserManagement() {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {handleSubmit,control,setValue,reset}=useForm({
    defaultValues: {
      taiKhoan:        "",
      hoTen:           "",
      email:           "",
      soDt:            "",
      maNhom:         "GP01",
      maLoaiNguoiDung: "",
      matKhau: "",
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isupDate,setIsUpdate]=useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenModal, setIsOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data,isLoading,error}=useQuery({
    queryKey: ["list-user", { currentPage }],
    queryFn: () => getUserList(currentPage),
  })
 
  const queryClient=useQueryClient();
  const {mutate: handleAddUser,isPending}=useMutation({
    mutationFn:(formValues:any)=>{
      if(isupDate){
        return UpdateUserApi(formValues);
      }
      return addUserApi(formValues);
    },
    onSuccess:(data)=>{
      
      setIsOpenModal(false);
      queryClient.refetchQueries({
        queryKey: ["list-user", { currentPage }],
        type: "active",
      });
    },
    onError:(error)=>console.log(error)
  });
  const {mutate: handledeleteUser}=useMutation({
    mutationFn:(formValues:string)=>{
        return DeleteUserApi(formValues);
      
    },
    onSuccess:(data)=>{
      console.log("xóa thành công");
      queryClient.refetchQueries({
        queryKey: ["list-user", { currentPage }],
        type: "active",
      });
    },
    onError:(error)=>console.log(error)
  });
  
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
    },
    {
      title: "Mã KH",
      dataIndex: "maLoaiNguoiDung",
      render: (maLoaiNguoiDung: string) => {
        return maLoaiNguoiDung === "KhachHang" ? (
          <Tag color="default">Khách hàng</Tag>
        ) : (
          <Tag color="success">Quản Trị</Tag>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: User) => (
        <Space size="middle">
          <Popconfirm
            title="Xoá người dùng"
            description="Bạn có chắc chắn sẽ xoá người dùng này?"
            onConfirm={() => handleDelete(record)}
            okText={<span>OK</span>}
            cancelText="Huỷ"
          >
            <Button danger>Xoá</Button>
          </Popconfirm>
          <Button type="default"
          onClick={()=>{
            setIsOpenModal(true);
            setIsUpdate(true);
            setValue("taiKhoan",record.taiKhoan);
            setValue("matKhau",record.matKhau);
            setValue("hoTen",record.hoTen);
            setValue("email",record.email);
            setValue("soDt",record.soDt);
            setValue("maLoaiNguoiDung",record.maLoaiNguoiDung)
          }}
          >Cập nhật</Button>
        </Space>
      ),
    },
  ];
  
  const handleDelete = (record: any) => {
    handledeleteUser(record.taiKhoan);
  };
  
  const onSubmit=(formValues: any)=>{
    const formData={
      taiKhoan: formValues.taiKhoan,
      matKhau: formValues.matKhau,
      email: formValues.email,
      soDt: formValues.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: formValues.maLoaiNguoiDung,
      hoTen: formValues.hoTen
    }
    handleAddUser(formData);
  };

  const mockData = data?.items || [];
  const totalCount = data?.totalCount || 0;
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
              title: "Quản lý người dùng",
            },
          ]}
        />
        <Button type="primary" size="large"
        onClick={()=>{
          setIsOpenModal(true);
          reset();
          setIsUpdate(false);
        }}
        >
          Thêm
        </Button>
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách người dùng</h4>
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"taiKhoan"}
          dataSource={mockData}
          pagination={false}
          loading={isLoading}
        />
        <div className="flex float-end mt-4 pb-4">
          <Pagination defaultCurrent={currentPage} total={totalCount} pageSize={PAGE_SIZE}
          onChange={(page:number)=>{setCurrentPage(page)}}
          />
        </div>
      </div>
      <Modal
      title={isupDate===true? 'Update User' : 'Add User'}
      centered
      open={isOpenModal}
      onCancel={()=>setIsOpenModal(false)}
      footer={false}
      >
        <Form className="mt-4" onFinish={handleSubmit(onSubmit)} >
          <Row  gutter={[18, 18]}>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Account
              </label>
              <Controller
                name="taiKhoan"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Account"
                    disabled={isupDate}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Full Name
              </label>
              <Controller
                name="hoTen"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Name"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Password
              </label>
              <Controller
                name="matKhau"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="password..."
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
            <label className="text-sm" htmlFor="">
                Phone
              </label>
              <Controller
                name="soDt"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Phone number"
                    {...field}
                  />
                )}
              />
            </Col>
            
            <Col span={24} className="text-end">
              <Button
                loading={isPending}
                disabled={isPending}
                htmlType="submit"
                size="large"
                type="primary"
              >
                {isupDate===true?"Cập Nhật":"Thêm Mới"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

    </>
    
  );
}
