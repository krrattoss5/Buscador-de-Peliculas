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

  return (<ul>
    {
      movies.map(movie =>
        <li key={movie.id}>
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
