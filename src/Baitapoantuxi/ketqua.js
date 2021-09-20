import React, { Component } from "react";
import { connect } from "react-redux";
class Ketqua extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning ">{this.props.ketQua}</div>
        <div className="display-4 text-success mt-2 ">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <br />
        <div className="display-4 text-danger ">
          Tổng số bàn chơi:{" "}
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuXiReducer.ketQua,
    soBanThang: state.oanTuXiReducer.soBanThang,
    tongSoBanChoi: state.oanTuXiReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(Ketqua);
