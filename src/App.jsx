import { useState,useCallback } from 'react'
import './App.css'
import ListOfMovies from './components/ListOfMovies/ListOfMovies'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'

function App() {
  const [sort,setSort] = useState(false)

  const {search, updateSearch,error} = useSearch()
  const {movies,getMovies,loading} = useMovies({search,sort})

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({search})
    }
  , 1500),[getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='container'>

      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit} className="form">
          <input onChange={handleChange} value={search} name='query' type="search" placeholder='Action, Thriller, Fantasy, ...' /><input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Search</button>
        </form>
          {error?<p style={{color: 'red'}}>{error}</p>:null}
      </header>

      <main>
        {loading?<h1>Cargando...</h1>:<ListOfMovies movies={movies} />}
      </main>

    </div>
  )
}

export default App
