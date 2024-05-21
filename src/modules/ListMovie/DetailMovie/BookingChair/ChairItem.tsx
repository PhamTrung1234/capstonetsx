import React, { useState } from 'react'
import "../CSS/main.css"
export default function ChairItems(props:any) {
   const {getchair,ghe,index} = props;
   
  return (
    <>
        <tr>
          <td>{ghe.hang}</td>
          {getchair?.map((ch:any,index:number) => (
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
                    // checked={checkedSeats[ch.soGhe] || false}
                    // onChange={this.handleSeatSelect}
                  />
                )}
              </td>
              {index === 4 ? <td className="seatGap"></td> : null}
              {/* Thêm một thẻ <td> rỗng khi index là 4 */}
            </React.Fragment>
          ))}
        </tr>
        {index === 4 ? <tr className="seatVGap"></tr> : null}
      </>
  )
}
