import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice';
// import employeeReducer from './features/employeeSlice';
// import oneReducer from './features/oneEmployeeSlice';
import bookingReducer from './features/bookingSlice';
import roomReducer from './features/roomSlice';
import guestReducer from './features/guestSlice';
import messageReducer from './features/messageSlice'

export const store = configureStore({
  reducer: {
    user:  userReducer,
    // employees:  employeeReducer,
    guest :guestReducer,
    booking: bookingReducer,
    rooms: roomReducer,
    messages: messageReducer,
  }
  
})