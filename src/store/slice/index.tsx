import { createSlice } from "@reduxjs/toolkit";
import data from "../datacheater.json"
import { DanhSachGhe } from "../../types/movie.type";

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
  movieDettail: null,
  listUser : null,
  listCheater:data,
  currentUser:null,
  listChairSelect: [""],
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setdiscount: (state, { payload }) => {
      state.thongTinUuDai = payload;
      
    },
    setMovieDetail:(state,{payload})=>{
      state.movieDettail = payload;
    },
    setListUser:(state,{payload})=>{
      state.listUser = payload
    },
    selectChair:(state,{payload})=>{
      state.listChairSelect=[...state.listChairSelect,payload]
    },
    unselectChair:(state,{payload})=>{
      state.listChairSelect=state.listChairSelect.filter(chair=>chair!=payload)
    },
    confimChair: (state) => {
      state.listCheater = state.listCheater.map((chair) => {
        if (chair.hang !== "") {
          chair.danhSachGhe.forEach((ghe:DanhSachGhe) => {
            if (state.listChairSelect.includes(ghe.soGhe)) {
              ghe.daDat = true;
            }
          });
        }
        return chair;
      });
    },
    deleteChair: (state, { payload }) => {
      state.listChairSelect = state.listChairSelect.filter((v) => v !== payload);
      state.listCheater = state.listCheater.map((chair) => {
        if (chair.hang !== "") {
          chair.danhSachGhe.forEach((ghe:DanhSachGhe) => {
            if (ghe.soGhe === payload) {
              ghe.daDat = false;
            }
          });
        }
        return chair;
      });
    },
  resetState: () => initialState,
  setCurrentUser:(state,{payload})=>{
     state.currentUser = payload
  }
  },
});
export const { setdiscount,setMovieDetail,setListUser,
  
  selectChair,unselectChair,confimChair,deleteChair,resetState,setCurrentUser } = userSlice.actions;
export default userSlice;