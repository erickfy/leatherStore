import { configureStore } from '@reduxjs/toolkit'
import counterSlide from './reducers/counterSlice';
import authSlice from './reducers/authSlice';

export default configureStore({
  reducer: {
      counter: counterSlide,
      auth: authSlice,
  },
})