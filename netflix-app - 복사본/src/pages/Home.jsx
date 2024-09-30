import React from 'react'
import api from '../api'
import { useEffect} from 'react';
import { initData } from '../redux/reducers/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList';

const Home = () => {

  const {popularMovies, topRatedMovies, upcomingMovies}= useSelector(state=>state.movie)

  console.log(popularMovies.length, topRatedMovies.length, upcomingMovies.length);
  
  const dispatch = useDispatch()

  const getMovieInfoList = async() =>{
    const popularAPI =  api.get('/movie/popular?language=ko-KR&page=1');
    const topRatedAPI =  api.get('/movie/top_rated?language=ko-KR&page=1');
    const upcomingAPI = api.get('/movie/upcoming?language=ko-KR&page=1');
    const genreApi = api.get('/genre/movie/list?language=ko')

    // Promise.all([]): 동시에 여러 개의 api호출을 해야 할 경우사용
    //  하나라도 통신과정에서 오류가 발생하면 모든 요청이 reject(거절)되는 방식

    const [popular, top_rated, upcoming, genre] = await Promise.all([popularAPI, topRatedAPI, upcomingAPI,genreApi])
   

    dispatch(initData({
      p:popular.data.results,
      t:top_rated.data.results,
      u:upcoming.data.results,
      g: genre.data.genres
      }))
  }
  useEffect(()=>{
    getMovieInfoList()
  },[])
  


  return (
    <div>
      {popularMovies.length > 0 ?
      <div>

      <Banner data={popularMovies[0]}/>
      <h3>인기있는 영화</h3>
      <MovieList list={popularMovies}></MovieList>
      <h3>평점이 높은 영화</h3>
      <MovieList list={topRatedMovies}></MovieList>
      <h3>개봉예정 영화</h3>
      <MovieList list={upcomingMovies}></MovieList>
      </div>

      :''

      }
    </div>
  )
}

export default Home