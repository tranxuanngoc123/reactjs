import React, { Component } from "react";

export default class Thongtinghe extends Component {
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
            <thead>
              <tr className="text-light" style={{fontSize: '16px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <thead>
              <tr className="text-light" style={{fontSize: '16px' }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
