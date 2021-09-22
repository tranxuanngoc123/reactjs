import React, { Component } from "react";
import {connect} from 'react-redux'
import { huyGheAction } from "../redux/actions/BookingAction";

class Thongtinghe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: "33px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"> </button>{" "}
          <span className="text-light" style={{ fontSize: "33px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}>
            {""}
          </button> {""}
          <span className="text-light" style={{ fontSize: "33px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-3">
          <table className="table text-center" border="2" >
            <thead>
              <tr className="text-light" style={{fontSize: '16px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            
           
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index)=> {
                return <tr key={index}>
                <td>{gheDangDat.soGhe}</td>,
                <td>{gheDangDat.gia.toLocalString()}</td>
                <td><button onClick={()=>{this.props.dispatch(huyGheAction(gheDangDat.soGhe))}}>Huỷ</button></td>
                </tr>
                
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền:</td>
                <td className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index)=>{
                  return tongTien += gheDangDat.gia
                },0).toLocalString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingMovieReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(Thongtinghe)