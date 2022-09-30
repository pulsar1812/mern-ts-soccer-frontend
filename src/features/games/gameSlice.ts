import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { Game } from '../../interfaces/Game'

interface GameState {
  games: Game[] | null
  singleGame: Game | null
  loading: boolean
  error: any
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  error: null,
}

// Action for getting data from backend
export const getGames = createAsyncThunk<Game[]>(
  'games/getGames',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/api/games')
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

// Action for creating data
export const createGame = createAsyncThunk<Object, Game>(
  'games/createGame',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/api/games', data)
      thunkAPI.dispatch(getGames())
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload
      state.loading = false
    })
    builder.addCase(getGames.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const { setGames } = gameSlice.actions
export default gameSlice.reducer
