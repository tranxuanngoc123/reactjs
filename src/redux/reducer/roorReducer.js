import { combineReducers } from "redux";
import oanTuXiReducer from "./oantuxireducer";
import BookingMovieReducer from "./bookingmoviereducer";

const rootReducer = combineReducers({
  oanTuXiReducer,
  BookingMovieReducer,
});

export default rootReducer;
