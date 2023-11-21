import './App.css'
import ListOfMovies from './components/ListOfMovies/ListOfMovies'
import { useMovies } from './hooks/useMovies.js'

function App() {
  const {movies} = useMovies()

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
        <ListOfMovies movies={movies} />
      </main>

    </div>
  )
}

export default App
