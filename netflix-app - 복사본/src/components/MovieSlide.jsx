import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';  // MovieCard 컴포넌트 import
import '../MovieCard.css';  // CSS 파일 import

// react-multi-carousel의 설정
const responsive = {
  desktop: {
    breakpoint: { max: 2560, min: 1024 },
    items: 5,
  },
};

const MovieSlide = ({ movies }) => {
  return (
    <div className="movie-slide-container">
      <Carousel responsive={responsive}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ padding: '10px' }}>
            <MovieCard movie={movie} /> {/* MovieCard에 영화 정보 전달 */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
