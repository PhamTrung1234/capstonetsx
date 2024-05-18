import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState  = {
  thongTinUuDai: [
    {hinhAnh:"https://tse2.mm.bing.net/th?id=OIP.CqISF605iTyMJTcrf8f-mwHaEo&pid=Api&P=0&h=180",
      noiDung:"combo chỉ với 175k cho 2 nước tùy chọn + 2 vé tặng 1 bỏng siêu to khổng lồ"
    },
    {
      hinhAnh:"https://tse2.mm.bing.net/th?id=OIP.Qc-CMbKgnrHeeINwDIzRTQHaE8&pid=Api&P=0&h=180",
      noiDung:"T7,CN siêu ưu đãi chỉ với 75k được combo nước Pepsi và bỏng siêu to khổng lồ "
    },
    {
      hinhAnh:"https://tse3.mm.bing.net/th?id=OIP.YmRK8Kzs_2sfH_yKudKKxQHaHa&pid=Api&P=0&h=180",
      noiDung:"combo siêu hot tại rạp chỉ với 99k được 2 vé xem phim + 1 nước"
    },{
      hinhAnh:"https://tse1.mm.bing.net/th?id=OIP.gZaa5y5Q3zMXbIfoOT0jgAHaGt&pid=Api&P=0&h=180"
      ,noiDung:"bắp ngăn đôi gấp đôi hạnh phúc"
    }
  ],
  currentUser: {} || localStorage.getItem("user")
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setdiscount: (state, { payload }) => {
      state.thongTinUuDai = payload;
      state.currentUser = payload;
    },
   
  },
});


export const { setdiscount } = userSlice.actions;
export default userSlice;