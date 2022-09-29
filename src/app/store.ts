import { configureStore } from '@reduxjs/toolkit'

import gameReducer from '../features/games/gameSlice'

export const store = configureStore({
  reducer: {
    games: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
