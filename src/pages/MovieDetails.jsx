import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function MovieDetails() {
  const {id}=useParams()
  const [movie,setMovie]=useState(null)

  useEffect(()=>{
    async function getMovie() {
    const result=await fetch(`http://www.omdbapi.com/?&apikey=d64ab20e&i=${id}`)
    const data=await result.json();
    setMovie(data)
    console.log(data);
  }
  getMovie()
  },[id])

  if(!movie) return
  return (
    <div>
      <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
    </div>
  )
}

export default MovieDetails
