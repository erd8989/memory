import React from 'react';

function Banner({ movie }) {
    if (!movie) return null; // movie 데이터가 없을 경우 null 반환

    return (
        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundSize: 'cover', height: '400px', color: 'white' }}>
            <div className="banner-content">
                <h1>{movie.title || movie.name}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}

export default Banner;
