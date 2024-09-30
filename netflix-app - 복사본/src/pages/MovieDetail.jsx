import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Badge from 'react-bootstrap/esm/Badge'

const MovieDetail = () => {
 
  const {id}= useParams()
  const [movieInfo, setMovieInfo]=useState({})
  const [review,setReview] = useState([])

  const getMovieInfo = async () =>{
    let res = await api.get(`/movie/${id}?language=ko-KR`)
    setMovieInfo(res.data)
  }
 

 const getReviews = async () =>{
  let res =await api.get(`/movie/${id}/reviews?language=en-US&page=1`)
 
  console.log(res.data);

  setReview(res.data.results)
 }
 
 
 
  useEffect(()=>{
    getMovieInfo()
    getReviews()
  },[])

 


  return (
    <Container className='movie-details'>
      <Row>
        <Col className='poster'>
         <img src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt='포스터 이미지'/>
        </Col>
        <Col className='info'>
        <div className='genre'>
          {movieInfo.genres?.map((genre)=>(
           <Badge key={genre.id} bg='danger'>{genre.name}</Badge>
        ))}
        </div>

        <h1>{movieInfo.title}</h1>

        <h4>{movieInfo.tagline}</h4>

        <div>
          <span>{movieInfo.release_date}</span>
          <span>{movieInfo.runtime}분</span>
          <span>{movieInfo.vote_average}</span>
          <span>{movieInfo.adult?'청불':'청소년'}</span>
        </div>

        <div className='overview'>{movieInfo.overview}</div>

       </Col>
      </Row>

      <Row>
        <Col className='container review-box'>
             {review.map((item)=>(
              <div className='review-item' key={item.id}>
                <h4>{item.author}</h4>
                <p>{item.content}</p>
              </div>
             ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail