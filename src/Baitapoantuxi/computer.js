import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes ramdomItem${Date.now()}{
            0% {top: -50};
            25% {top: 100};
            50% {top: -50};
            75% {top: 100};
            100% {top: 0 };
          }
        `;
    return (
      <div className="text-center playerGame">
        <style>
          {keyframe} 

        </style>
        <div className="think" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              left: "25%",
              animation: `all ramdomItem${Date.now()} 0,5s`,
              transform: "rotate(120deg)",
              width: 100,
              height: 100,
            }}
            className="mt-3"
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>

        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/gameoantuxi/playerComputer.png"
          alt="./img/gameoantuxi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
