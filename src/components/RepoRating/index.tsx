import { SyntheticEvent, useContext, useState } from 'react'
import { Box, Typography, Rating } from '@mui/material'
import { RepoInfo } from '../../types/repository'
import { FavoritesContext } from '../../hooks/FavoritesContext'

type RepoRatingType = {
  name: string
  repoId: string
  rating?: number | null
}

export function RepoRating({ name, repoId, rating }: RepoRatingType) {
  const [value, setValue] = useState<number | null>(rating || 0)
  const [favorites, setFavorites] = useContext(FavoritesContext)

  const handleRatingValue = (_: SyntheticEvent, newValue: number | null) => {
    const updateRating = favorites.map((item: RepoInfo) => {
      if (item.id === repoId) {
        return { ...item, rating: newValue }
      }
      return item
    })

    setValue(newValue)
    setFavorites(updateRating)
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component='legend'>{name}</Typography>
      <Rating name='controlled' value={value} onChange={handleRatingValue} />
    </Box>
  )
}
