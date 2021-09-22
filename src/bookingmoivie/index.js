import React, { Component } from "react";
import "./styleBooking.css";
import Thongtinghe from "./thongtinghe";
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from "./hangghe";

export default class Bookingmovie extends Component {
  renderHangGhe = ()=> {
    return danhSachGheData.map((hangGhe, index)=>{
        return <div key={index}>
            <HangGhe  hangGhe={hangGhe} soHangGhe={index}/>
        </div>
    }) 
  }
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingmovie/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-4 text-warning mt-3" style={{fontSize: '35px'}}>
                  TRẦN XUÂN NGỌC
                </div>
                <div className=" text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-1 "
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}
                >
                  <div className="screen ml-5"></div>
                  {this.renderHangGhe()}
                </div>
                
              </div>
              <div className="col-4 ">
                <div
                  className="display-4 text-warning text-center mt-3 "
                  style={{ fontSize: "35px" }}
                >
                  DANH SÁCH GHẾ
                </div>

                <Thongtinghe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
