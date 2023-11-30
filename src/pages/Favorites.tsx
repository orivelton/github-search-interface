import { useContext } from 'react'
import { FavoritesContext } from '../hooks/FavoritesContext'
import { RepoInfo } from '../types/repository'
import { RepoRating } from '../components/RepoRating'

export function Favorites() {
  const [favorites] = useContext(FavoritesContext)
  return (
    <>
      {favorites.length
        ? favorites.map(({ id, name, rating }: RepoInfo) => (
            <RepoRating key={id} name={name} repoId={id} rating={rating} />
          ))
        : 'No favorites found'}
    </>
  )
}
