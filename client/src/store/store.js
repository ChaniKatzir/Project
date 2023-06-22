import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './status'
export const store = configureStore({
  reducer: { counter: counter,},
})

