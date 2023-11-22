import './App.css'
import ListOfMovies from './components/ListOfMovies/ListOfMovies'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'

function App() {
  const {search, updateSearch,error} = useSearch()
  const {movies,getMovies} = useMovies({search})

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')) reurn
    updateSearch(e.target.value)
  }

  return (
    <div className='container'>

      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit} className="form">
          <input onChange={handleChange} value={search} name='query' type="search" placeholder='Action, Thriller, Fantasy, ...' />
          <button type='submit'>Search</button>
        </form>
          {error?<p style={{color: 'red'}}>{error}</p>:null}
      </header>

      <main>
        <ListOfMovies movies={movies} />
      </main>

    </div>
  )
}

export default App
