import React from 'react'
import { Container } from '@mui/material'
import { Header } from './components/Header'
import { GithubSearch } from './components/GithubSearch'
import { Favorites } from './pages/Favorites'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Header />
        <Routes>
          <Route path='/' element={<GithubSearch />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
