import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../MovieCard.css';  // CSS 파일 import

const MovieCard = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);  // 장르 목록 가져오기

  const findGenreName = (id) => {
    const genre = genreList.find((genre) => genre.id === id);
    return genre ? genre.name : 'Unknown';
  };

  const pop = Math.floor(movie.popularity)
  const genre = movie.genre_ids[0]
  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
        alt={movie.title} 
      />
      <div className="overlay" onClick>
        <h5>{movie.title}</h5>
        <div>
          {movie.genre_ids.map((id) => (
            <Badge key={id} bg="danger" style={{ margin: '2px' }}>
                 {genre} / {pop}
            </Badge>
          ))}
        </div>
        <p>평점: {movie.vote_average} | {movie.adult === true ? '전연령' : '청소년'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
