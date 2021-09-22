import React, { Component } from "react";
import {connect} from 'react-redux';
import { datGheAction } from "../redux/actions/BookingAction";

class Hangghe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      // if (index === 0) {
      //   return <span className="rowNumber">{ghe.soGhe}</span>;
      // }

      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = ''
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe = ghe.soGhe)
      if(indexGheDangDat !== -1){
        cssGheDangDat = ''
      } 
      return (
        <button
          onClick={() => {this.props.datGhe(ghe)}}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-2"> 
          {this.props.hangGhe.hang} {this.renderSoHang()};
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-1 ">
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookingMovieReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}
export default connect(mapStateToProps) (Hangghe)