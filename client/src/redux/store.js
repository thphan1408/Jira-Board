import { configureStore } from '@reduxjs/toolkit'
import boardsSlice from './boardsSlice' 

const store = configureStore({
  reducer: {
    // Add reducers here from redux slice files
    boards: boardsSlice.reducer
  },
})

export default store
