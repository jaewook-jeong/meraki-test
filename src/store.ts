import { configureStore } from '@reduxjs/toolkit'
import articleReducer from 'features/article/slice'
import filterReducer from 'features/filter/slice'

export const store = configureStore({
  reducer: {
    article: articleReducer,
    filter: filterReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch