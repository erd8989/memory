import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: 'movie',

  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    keyword: '',
    genreList: []  // 장르 목록 추가
  },

  reducers: {
    initData: (state, action) => {
      const { popularMovies, topRatedMovies, upcomingMovies, genreList } = action.payload;
      
      state.popularMovies = popularMovies;
      state.topRatedMovies = topRatedMovies;
      state.upcomingMovies = upcomingMovies;
      state.keyword = action.payload.keyword;

      console.log("initData 호출됨: ", { popularMovies, topRatedMovies, upcomingMovies, genreList });
    }
  }
})



export const { initData } = MovieSlice.actions;
export default MovieSlice.reducer;
