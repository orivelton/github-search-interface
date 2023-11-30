import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material'
import { MdFavorite } from 'react-icons/md'
import { FavoritesContext } from '../../hooks/FavoritesContext'

export function Header() {
  const [favorites] = useContext(FavoritesContext)

  console.log(favorites?.length)

  return (
    <AppBar position='static' sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant='h6' component='div' color='white'>
          <Link to='/' title='Go to Home'>
            Github Search Interface
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Link to='/favorites'>
              <Badge badgeContent={favorites?.length} color='error'>
                <MdFavorite />
              </Badge>
            </Link>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
