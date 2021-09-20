const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameoantuxi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameoantuxi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameoantuxi/bao.png", datCuoc: false },
  ],
  ketQua: "Nguyễn Thị Thuý Kiều",
  soBanThang: 0,
  tongSoBanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./img/gameoantuxi/bua1.png" },
};

const oanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAMDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;
      console.log("RAMDOM", action);
      return { ...state };
    }
    case 'END_GAME': 
      state.tongSoBanChoi += 1
      let player = state.mangDatCuoc.find((item)=>item.datCuoc === true)
      let computer = state.computer;
      switch(player.ma ){
        case 'keo':
          if(computer.ma === 'keo'){
            state.ketQua = 'Hoà nhau!!!'
          } else if(computer.ma === 'bua'){
            state.ketQua = 'Thua rồi!!!'
          } else {
            state.soBanThang += 1;
            state.ketQua = 'Thắng rồi!!!'
          }break;
          
        case 'bua':
          if(computer.ma === 'keo'){
            state.soBanThang += 1;
            state.ketQua = 'Thắng rồi!!!'
          } else if(computer.ma === 'bua'){
              state.ketQua = 'Hoà nhau!!!'
          } else {
              state.ketQua = 'Thua rồi!!!'
          }break;
        case 'bao':
          if(computer.ma === 'keo'){
            state.ketQua = 'Thua rồi!!!'
          } else if(computer.ma === 'bua'){
            state.soBanThang += 1;
            state.ketQua = 'Thắng rồi!!!'
          } else {
                state.ketQua = 'Hoà nhau!!!'
          }break;
          default : 
          state.soBanThang += 1;
          state.ketQua = "Thắng rồi!!!";
      };
        return {...state}
    default: return { ...state };
  }
};

export default oanTuXiReducer;
