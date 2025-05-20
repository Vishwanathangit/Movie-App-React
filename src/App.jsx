import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Watchlist from './pages/Watchlist'
import { WatchListProvider } from './context/WatchListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/watchlist' element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
