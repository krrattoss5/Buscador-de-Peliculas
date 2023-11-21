import './App.css'
import resMovies from './mocks/res.json'

function App() {
  const movies = resMovies?.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='container'>

        <h1>Buscador de peliculas</h1>
      <header>
        <form action="" className="form">
          <input type="search" placeholder='Action, Thriller, Fantasy, ...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          hasMovies
          ? (<ul>
            {
              movies.map(movie =>
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie?.Poster} alt={movie.name} />
                </li>
              )
            }
          </ul>):null
        }
      </main>

    </div>
  )
}

export default App
