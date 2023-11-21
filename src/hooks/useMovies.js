import resMovies from '../mocks/res.json'

export function useMovies(){
  const movies = resMovies?.Search

  const mappedMovies = movies.map(movie => ({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
  }))
  return {movies: mappedMovies}
}