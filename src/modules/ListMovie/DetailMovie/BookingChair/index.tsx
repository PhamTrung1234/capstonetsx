import {  Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import React, { useState } from "react";
import "../CSS/main.css"
import ChairItems from "./ChairItem";
import { confimChair,deleteChair, resetState } from "../../../../store/slice";
import { Button } from "antd";
import currency from "currency.js"

export default function Ticketbooking() {
  
  const user = localStorage.getItem("user")
  
  if(!user){
    return <Navigate to={"/auth/signin"}/>
  }
  const {listCheater,listChairSelect} = useAppSelector(state=>state.endow)
  
  const [confirmclick,setConfirmclick] = useState(false)
  
  
  const [deleteclick,setdeleclick]=useState(false);
  const dispatch=useAppDispatch();
  const userProfileString:any = useAppSelector(state=>state.endow.currentUser);
  const userEmail = userProfileString  ? userProfileString.email : '';
  
  const handleConfirmSelection=()=>{
    dispatch(confimChair());
    setConfirmclick(true);
  }
  const  renderChairList = () => {
    
    return listCheater.map((ghe, index) => {
      return (
        <ChairItems
          key={index}
          deleteclick={deleteclick}
          getchair={ghe.danhSachGhe}
          index={index}
          ghe={ghe}
          confirmclick={confirmclick}
        />
      );
    });
  };
  
  

  const renderChairSelect = () => {
    
    if (confirmclick !== true) {
      return null;
    }
    const buttons:any = [];
    listCheater.forEach((ghe, index) => {
      ghe.danhSachGhe.forEach((c, subIndex) => {
        if (listChairSelect.includes(c.soGhe)) {
          buttons.push(
            <React.Fragment key={`${index}-${subIndex}`}>
            <button  className="btn btn-info mr-1 mt-2 ">{c.soGhe}</button>
            <button  className="btn btn-primary mr-1 mt-2 ">75000 VND</button>
            <button  className="btn btn-danger  mt-2 " onClick={()=>{dispatch(deleteChair(c.soGhe)); setdeleclick(true)}}>Delete</button>
            <br></br>
            </React.Fragment>
          );
        }
      });
    });
    return buttons;
  };
  const total = renderChairSelect()? renderChairSelect().length : 0;
  
  return (
   
    
    <div className="relative chair__item">
       <h1>Movie Seat Selection</h1>
      <div className="flex justify-center ">
        
        <div className="w3ls-reg ">
           <h2>fill the required details below and select your seats</h2>
          <ul className="seat_w3ls pl-0">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>
         
          <div
            className="seatStructure txt-center"
            style={{ overflowX: "auto" }}
          >
            <p id="notification" />
            <table id="seatsBlock">
              <tbody>{renderChairList()}</tbody>
            </table>
            <div className="screen">
              <h2 className="wthree text-center">Screen this way</h2>
            </div>
            <div className="flex justify-center ">
            <button className="rounded-xl"
              onClick={() =>handleConfirmSelection()}
            >
              Confirm Selection
            </button>
            </div>
          </div>
          
          <div
            className="displayerBoxes txt-center"
            style={{ overflow: "hidden" }}
          >
            <table className="Displaytable w3ls-table" style={{ borderCollapse: 'collapse' }} width="100%">
              <tbody className="text-align-center">
                <tr>
                  <th style={{ border: '1px solid black' }}>Name</th>
                  <th style={{ border: '1px solid black' }}>Number of Seats</th>
                  <th>Seats</th>
                  
                </tr>
                <tr>
                  <td style={{ border: '1px solid black' }} > {(confirmclick===true &&  (listChairSelect.length > 0 && userEmail!=""))  ? userEmail:""}</td>
                  <td style={{ border: '1px solid black' }}>{(confirmclick===true&&listChairSelect.length>1 ) ?listChairSelect.length-1:''}</td>
                  <td style={{ border: '1px solid black' }}>
                  {(confirmclick===true)  ?renderChairSelect():""}
                  <textarea   defaultValue={""} ></textarea>
                  
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-5">
            <span className="text-white bg-red-600 text-lg py-3 px-5 uppercase">Tổng tiền: {currency((total*75000),{symbol:""}).format()} vnđ</span>
          </div>
          <Button onClick={()=>{dispatch(resetState()),setConfirmclick(false)}} type="primary" className="mt-2 bg-green-500"  size='large'>
            CHECK-OUT
          </Button>
        </div>
        </div>
         
      </div>
      
   
  
  )
}
