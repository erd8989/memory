import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: 'movie',

  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    genreList:[]
  },

  reducers: {
    initData: (state, action) => {
      
      
      state.popularMovies = action.payload.p
      state.topRatedMovies = action.payload.t
      state.upcomingMovies = action.payload.u
      state.genreList = action.payload.g

 
    }
  }
})



export const { initData } = MovieSlice.actions;
export default MovieSlice.reducer;
