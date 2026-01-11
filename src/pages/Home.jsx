import { useEffect, useRef, useState } from 'react'
import MovieList from '../components/MovieList'
function Home() {
  const [movies,setMovies]=useState([])
  const[loading,setLoading]=useState(false)
  const inputRef=useRef()


  const fetchMovies=async(query)=>{
    setLoading(true)
    const result=await fetch(`http://www.omdbapi.com/?&apikey=d64ab20e&s=${query}`)
    const data=await result.json();
    console.log(data);
    setMovies(data.Search|| [])
    setLoading(false)
  }

  useEffect(()=>{
    fetchMovies('batman')
  },[])

  const handleSearch=(event)=>{
    event.preventDefault()
    const value=inputRef.current.value.trim();
    if(value) fetchMovies(value)
    
  }
  return (
    <>
    <div className="home">
		<form onSubmit={handleSearch}>
			<input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>
    {loading ? <p>Loading...</p> :<MovieList movies={movies}/>}
			
	</div>	 
    </>
  )
}

export default Home
