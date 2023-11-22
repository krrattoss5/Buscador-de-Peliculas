export default function ListOfMovies({movies}){
  const hasMovies = movies?.length > 0
  return (
    <>
      {
        hasMovies
        ? <Movies movies={movies}/>
        : <NoMovies />
      }
    </>
  )
}

function Movies({movies}) {

  return (<ul className="movies">
    {
      movies.map(movie =>
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie?.poster} alt={movie.name} />
        </li>
      )
    }
  </ul>)
}

function NoMovies(){
  return <h3>Results not match</h3>
}
