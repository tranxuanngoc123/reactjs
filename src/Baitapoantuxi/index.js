import React, { Component } from "react";
import Computer from "./computer";
import Ketqua from "./ketqua";
import "./style.css";
import Player from "./player";
import { connect } from "react-redux";

class Oantuxi extends Component {
  render() {
    return (
      <div className="gameOantuxi">
        <div className="row text-center mt-3">
          <div className="col-4 mt-3">
            <Player />
          </div>

          <div className="col-4 mt-3">
            <Ketqua />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>

          <div className="col-4 mt-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      //khai báo hàm lập
      let count = 0;
      let ramdomComputerLapLaiItem = setInterval(() => {
        dispatch({
          type: "RAMDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(ramdomComputerLapLaiItem);
          dispatch ({
              type: 'END_GAME',
          })
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(Oantuxi);
