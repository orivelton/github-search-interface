import { useContext } from 'react'
import { FavoritesContext } from '../hooks/FavoritesContext'
import { Box, Divider, Typography } from '@mui/material'
import { RepoInfo } from '../types/repository'
import { RepoRating } from '../components/RepoRating'

export function Favorites() {
  const [favorites, setFavorites] = useContext(FavoritesContext)
  return (
    <>
      {favorites.length
        ? favorites.map((item: RepoInfo) => (
            <RepoRating key={item.id} name={item.name} />
          ))
        : 'No favorites'}
    </>
  )
}
