import { Badge, Paper } from '@mui/material'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { MdFavorite, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { FavoritesContext } from '../../hooks/FavoritesContext'

export function Header() {
  const [favorites, setFavorites] = useContext(FavoritesContext)

  return (
    <AppBar position='static' sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant='h6' component='div' color='white'>
          <Link to='/' title='Go to Home'>
            Github Search Interface
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
