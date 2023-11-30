import React, { useState } from 'react'
import { Container } from '@mui/material'
import { Header } from './components/Header'
import { GithubSearch } from './components/GithubSearch'
import { Favorites } from './pages/Favorites'
import { Route, Routes } from 'react-router'
import { FavoritesContext } from './hooks/FavoritesContext'
import { TokenInput } from './components/TokenInput'

function App() {
  const [favorites, setFavorites] = useState([])

  return (
    <FavoritesContext.Provider value={[favorites, setFavorites]}>
      <div className='App'>
        <Container maxWidth='sm'>
          <Header />
          <Routes>
            <Route path='/' element={<GithubSearch />} />
            <Route path='favorites' element={<Favorites />} />
          </Routes>
          <TokenInput />
        </Container>
      </div>
    </FavoritesContext.Provider>
  )
}

export default App
