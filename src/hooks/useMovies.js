import resMovies from '../mocks/res.json'
import noMovies from '../mocks/reject.json'
import { useState } from 'react'

export function useMovies({search}){
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  //si tiene elementos los mapea si no no hace nada ?.map(()=>{})
  const mappedMovies = movies?.map(movie => ({
    id:movie.imdbID,
    title:movie.Title,
    year:movie.Year,
    poster:movie.Poster
  }))

  const getMovies = async () => {
    if(search){
      const res = await fetch(`https://www.omdbapi.com/?apikey=3cf85b95&s=${search}`)
        const data = await res.json()
        setResponseMovies(data)
    }else{
      setResponseMovies(noMovies)
    }
  }

  return {movies: mappedMovies,getMovies}
}