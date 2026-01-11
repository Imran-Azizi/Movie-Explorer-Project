import MovieCard from './MovieCard'
function MovieList({movies}) {
  if(movies.length===0){
    return <p>No movies Found.</p>
  }
  return (
    <>
    <div className="movie-list">
      {movies.map((single) => (  
      <MovieCard key={single.imdbID} movie={single}/>
      ))}
      </div>
    </>
  )
}

export default MovieList
