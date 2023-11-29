import { Box, Typography, Rating } from '@mui/material'
import { useState } from 'react'

export function RepoRating({ name }: { name: string }) {
  const [value, setValue] = useState<number | null>(0)

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component='legend'>{name}</Typography>
      <Rating
        name='controlled'
        value={value}
        onChange={(
          _: React.SyntheticEvent<Element, Event>,
          newValue: number,
        ) => {
          setValue(newValue)
        }}
      />
    </Box>
  )
}
