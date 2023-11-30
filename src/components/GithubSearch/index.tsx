import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useLazyQuery } from '@apollo/client'
import { GET_REPO } from '../../graphql/query'
import { MuiAlert } from '../MuiAlert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import useDebounce from '../../hooks/useDebounce'
import { FavoritesContext } from '../../hooks/FavoritesContext'
import { RepoInfo } from '../../types/repository'

export function GithubSearch() {
  const [favorites, setFavorites] = useContext(FavoritesContext)
  const [query, setQuery] = useState('')
  const [searchResult, setSeachResult] = useState([])
  const debouncedSearchTerm = useDebounce(query)
  const [getRepo, { loading, error }] = useLazyQuery(GET_REPO, {
    variables: {
      first: 30,
      query: 'react',
    },
  })

  const handleSearch = async (
    _: SyntheticEvent<Element, Event>,
    newValue: string,
  ) => {
    if (!newValue) return
    setQuery(newValue)
  }

  useEffect(() => {
    ;(async () => {
      const { data } =
        (await getRepo({
          variables: {
            first: 20,
            query: debouncedSearchTerm,
          },
        })) || {}

      data?.search.repos && setSeachResult(data.search.repos)
    })()
  }, [debouncedSearchTerm, getRepo])

  const handleFavoritesContext = (option: any) => {
    const hasRepo = favorites.filter(
      (item: any) => item.id === option.id,
    ).length

    if (hasRepo) {
      setFavorites((prev: any) =>
        prev.filter((item: any) => item.id !== option.id),
      )
    } else {
      setFavorites((prev: any) => [...prev, option])
    }
  }

  if (error) return <MuiAlert severity='error' message={error?.message} />

  return (
    <Autocomplete
      id='tags'
      multiple
      fullWidth
      options={searchResult}
      loading={loading}
      disableCloseOnSelect
      onInputChange={handleSearch}
      getOptionLabel={(option: any) => option?.repo.name}
      disableClearable
      renderOption={(props, option) => {
        const idsSelected = favorites.map((item: RepoInfo) => item.id)
        const isSelected = idsSelected.includes(option.repo.id)
        return (
          <li {...{ ...props, key: option.repo.id }}>
            <Checkbox
              icon={<FavoriteBorderIcon fontSize='small' />}
              checkedIcon={<FavoriteIcon fontSize='small' />}
              style={{ marginRight: 8 }}
              checked={isSelected}
              onChange={() => handleFavoritesContext(option.repo)}
            />
            {option.repo.name}
          </li>
        )
      }}
      renderInput={(params) => (
        <TextField {...params} label='Search' placeholder='Favorites' />
      )}
    />
  )
}
