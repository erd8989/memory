import React from 'react'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux';

const MovieCard = ({data}) => {
  // console.log("[MovieCard]:",data);

  const genreList = useSelector(state=> state.movie.genreList)
  
  const div_styled = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face${data.backdrop_path})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  }

  return (
    <div className='movie-card' style={div_styled}>
      <Link to={`/movies/${data.id}`}>

          <div className='overlay'>
            <h1>{data.title}</h1>

            <div className='genre'>
            {data.genre_ids.map((id)=>(
              <Badge bg='danger'key={id}>
                {genreList.find((genre)=>genre.id===id).name}
              </Badge>
            ))}
          </div>
            <div>{data.vote_average}점</div>
            <div>{data.adult?'청불':'청소년'}</div>
          </div>
      </Link>
    </div>
  )
}

export default MovieCard