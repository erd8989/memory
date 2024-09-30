import React from 'react'

const Banner = ({data}) => {

    console.log(data);

    const div_styled = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.poster_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'}
    
  return (
    <div className='banner'style={div_styled}>
        <div className='banner-info'>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
        </div>
    </div>
  )
}
export default Banner