import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice';
// import employeeReducer from './features/employeeSlice';
import oneReducer from './features/oneEmployeeSlice';
import bookingReducer from './features/bookingSlice';
import roomReducer from './features/roomSlice';
export const store = configureStore({
  reducer: {
    user:  userReducer,
    // employees:  employeeReducer,
    employee: oneReducer,
    booking: bookingReducer,
    rooms: roomReducer,
  }
  
})