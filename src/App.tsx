import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import GamesPage from './features/games/GamesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
