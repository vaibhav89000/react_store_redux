import { configureStore } from '@reduxjs/toolkit'
import changeTheNumber from '../reducers/updown';


const store = configureStore({
    reducer:{
       number: changeTheNumber,
    }
  })
export default store;