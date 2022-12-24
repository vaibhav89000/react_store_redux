import { configureStore } from '@reduxjs/toolkit'
import showInput from '../reducers/input';
import changeTheNumber from '../reducers/updown';

// Two reducers used here
const store = configureStore({
    reducer:{
       number: changeTheNumber,
       inputval: showInput
    }
  })
export default store;