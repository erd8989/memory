import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const MyAxios = () => {
    const [movieData, setMovieData] =useState([])
    
    // axios : 비동기 통신 라이브러리
    function getData() {
        // 비동기 통신으로 데이터 가져오기
        axios({
            // 통신 할때 필요한 정보
            url : 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101',//어디랑 통신 할건지
           //method : '',// 어떤방삭으로 통신(get,post)
           //data : ''//요청시 전송할 데이터 
        })
        // 통신 성공시 실행할 로직
        .then((res)=>{
            // res : 통신성공시 서버에서 응답받은 데이터
           setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)
            
        })
    }
    
  return (
    <div>
        <table border={1}>
            <tr>
                <td>순위</td>
                <td>영화명</td>
                <td>개봉일</td>
            </tr>
        {movieData.map((data)=>
        <tr>
            <td>{data.rank}</td>
            <td>{data.movieNm}</td>
            <td>{data.openDt}</td>
            
        </tr>
    )}
        </table>
        <button onClick={getData}>정보가져오기</button>

    </div>
  )
}
export default MyAxios