import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initData } from '../redux/reducers/movieSlice';  // 정확한 경로로 수정
import api from '../api';  // 정확한 경로로 수정
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';  // MovieSlide import

function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector((state) => state.movie);  // 영화 목록 가져오기
 
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const popularMoviesResponse = await api.get('/movie/popular?language=ko-KR');
        const topRatedMoviesResponse = await api.get('/movie/top_rated?language=ko-KR');
        const upcomingMoviesResponse = await api.get('/movie/upcoming?language=ko-KR');
        const genreResponse = await api.get('/genre/movie/list?language=ko-KR');  // 장르 목록 요청

        dispatch(initData({
          popularMovies: popularMoviesResponse.data,
          topRatedMovies: topRatedMoviesResponse.data,
          upcomingMovies: upcomingMoviesResponse.data,
          genreList: genreResponse.data.genres  // 장르 목록 추가
        }));
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      }
    };

    fetchMovieData();
  }, [dispatch]);

  return (
    <div>
      {/* Banner 컴포넌트: popularMovies가 있을 경우 첫 번째 영화 정보를 전달 */}
      {popularMovies?.results && <Banner movie={popularMovies.results[0]} />}

      {/* MovieSlide 컴포넌트: 각 영화 목록을 슬라이드로 전달 */}
      {popularMovies?.results && <MovieSlide movies={popularMovies.results} />}
      {topRatedMovies?.results && <MovieSlide movies={topRatedMovies.results} />}
      {upcomingMovies?.results && <MovieSlide movies={upcomingMovies.results} />}

    </div>
  );
}

export default Home;
