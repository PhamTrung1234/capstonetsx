import React, { useState } from 'react'
import "../CSS/main.css"
import { useAppDispatch } from '../../../../store/hook';
import { DanhSachGhe, Ticket } from '../../../../types/movie.type';
import { selectChair, unselectChair } from '../../../../store/slice';
interface Props{
  deleteclick: boolean;
  getchair: DanhSachGhe[];
  index: number;
  ghe:Ticket;
  confirmclick:boolean;
}
export default function ChairItems(props:Props) {
   const {getchair,ghe,index} = props;
   const dispatch=useAppDispatch();
   
   const [checkedSeats,setCheckedSeats]=useState<{ [key: string]: boolean }>(
    () => {
      const initialSeats: { [key: string]: boolean } = {};
      getchair.forEach(ch => {
        initialSeats[ch.soGhe] = false;
      });
      return initialSeats;
    }
  );
  const handleSeatSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const soGhe = event.target.value;
    if (props.deleteclick) return ;
     if(props.confirmclick) return ;
    const updateCheckedSeats = { ...checkedSeats };
    updateCheckedSeats[soGhe] = !updateCheckedSeats[soGhe];

    if (updateCheckedSeats[soGhe]) {
      
      updateCheckedSeats[soGhe]=true;
      dispatch(selectChair(soGhe));
    } else {
      updateCheckedSeats[soGhe]=false;
      dispatch(unselectChair(soGhe));
    }

    setCheckedSeats(updateCheckedSeats);
  };
  return (
    <>
        <tr>
          <td>{ghe.hang}</td>
          {getchair?.map((ch:DanhSachGhe,index:number) => (
            <React.Fragment key={ch.soGhe}>
              <td>
                {!/^[A-Za-z]/.test(ch.soGhe) ? (
                  ch.soGhe
                ) : (
                  <input
                    type="checkbox"
                    className="seats"
                    disabled={  ch.daDat }
                    value={ch.soGhe}
                    checked={checkedSeats[ch.soGhe] || false}
                    onChange={handleSeatSelect}
                  />
                )}
              </td>
              {index === 4 ? <td className="seatGap"></td> : null}
              
            </React.Fragment>
          ))}
        </tr>
        {index === 4 ? <tr className="seatVGap"></tr> : null}
      </>
  )
}
