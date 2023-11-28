import React from 'react'
import { Container } from '@mui/material'
import { Header } from './components/Header'
import { GithubSearch } from './components/GithubSearch'

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Header />
        <GithubSearch />
      </Container>
    </div>
  )
}

export default App
