import { useCallback, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import { useAppDispatch } from './app/hooks'
import { getGames } from './features/games/gameSlice'
import GamesPage from './features/games/GamesPage'

function App() {
  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    await dispatch(getGames())
  }, [dispatch])

  useEffect(() => {
    initApp()
  }, [initApp])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
