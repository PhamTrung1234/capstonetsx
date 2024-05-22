import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../store/hook"


export default function ThanhVien() {
  const user = useAppSelector(state=>state.endow.currentUser)
  console.log(user)
  if(!user){
    return <Navigate to={"/auth/signin"}/>
  }
  return (
    <div className='container relative text-white thanhvien py-10'>
      <div className='flex justify-between thanhvien__img '>
        <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png" alt="" />
        <img src="https://www.barcode-generator.org/zint/api.php?bc_number=20&bc_data=9991987692049193" alt="" />
      </div>
      <div className='py-5'>
        <p className='font-bold text-lg  text-black'>xin chào {user?.hoTen}</p>
        <p className='color-bg1 text-lg'>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
      </div>
      <div >
        

<div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Cấp độ thẻ
        </th>
        <th scope="col" className="px-6 py-3 ">
        <i className="fa-solid fa-ranking-star text-2xl"></i>
        </th>
        <th scope="col" className="px-6 py-3">
          Thẻ quà tặng
        </th>
        <th scope="col" className="px-6 py-3">
          Voicher
        </th>
        <th scope="col" className="px-6 py-3">
          Counpon
        </th>
        <th scope="col" className="px-6 py-3">
        Thẻ Thành Viên
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Tổng Chi Tiêu
        </th>
        <td className="px-6 py-4 ">
          0 đ
        </td>
        <td className="px-6 py-4 ">
          0 đ
        </td>
        <td className="px-6 py-4">
          0
        </td>
        <td className="px-6 py-4">
          0
        </td>
        <td className="px-6 py-4">
          1
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Điểm TIEUSAU
        </th>
        <td className="px-6 py-4">
          0 P
        </td>
        <td className="px-6 py-4">
          <button className='btn btn-primary'>Xem</button>
        </td>
        <td className="px-6 py-4">
          <button className='btn btn-primary'>Xem</button>
        </td>
        <td className="px-6 py-4">
          <button className='btn btn-primary'>Xem</button>
        </td>
        <td className="px-6 py-4">
          <button className='btn btn-primary'>Xem</button>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>


      </div>
      <div className='py-5'>
        <h4 className='text-black pb-3'>Thông tin tài khoản</h4>
        <p className='text-black uppercase text-xl py-2'>Liên hệ</p>
        <p className='color-bg1'><span>Tên : </span>{user?.hoTen}</p>
        <p className='color-bg1'><span>Email : </span>{user?.email}</p>
        <p className='color-bg1'><span>Số điện thoại : </span>{user.soDT}</p>
      </div>
    </div>
  )
}
