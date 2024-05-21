import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../store/hook";
import React, { useState } from "react";
import "../CSS/main.css"
import ChairItems from "./ChairItem";
export default function Ticketbooking() {
  const data = useAppSelector(state=>state.endow.listCheater)
  console.log(data)
  const {id1} = useParams();
  const [confirmclick,setConfirmclick] = useState(false)
  const [username,setusername] = useState("")
  const [numberOfSeats,setNumber] = useState(0)
  
  const  renderChairList = () => {
    
    return data.map((ghe, index) => {
      return (
        <ChairItems
          key={index}
          
          getchair={ghe.danhSachGhe}
          index={index}
          ghe={ghe}
        />
      );
    });
  };
  

  const renderChairSelect = () => {
    
    return data.map((item,index)=>{
       return item.danhSachGhe.map((element,subIndex)=>{
         return (
          <React.Fragment key={`${index}-${subIndex}`}>
          <button  className="btn btn-danger mr-2 mt-2 ">{element.soGhe}</button>
          <button  className="btn btn-info mr-2 mt-2 ">Delete</button>
          <br></br>
          </React.Fragment>
         )
       })
    })
  };
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
              // onClick={() => {
              //   this.handleConfirmSelection();
              // }}
            >
              Confirm Selection
            </button>
            </div>
          </div>
          
          <div
            className="displayerBoxes txt-center"
            style={{ overflow: "hidden" }}
          >
            <table className="Displaytable w3ls-table" width="100%">
              <tbody className="text-align-center">
                <tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                <tr>
                  <td> {(confirmclick===true &&  data.length > 0)  ?`${username}`:""}</td>
                  <td>{(confirmclick===true &&  data.length > 0) ?`${numberOfSeats}`:""}</td>
                  <td>
                  {(confirmclick===true)  ?renderChairSelect():""}
                  <textarea   defaultValue={""} ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
         
      </div>
      
   
  
  )
}
