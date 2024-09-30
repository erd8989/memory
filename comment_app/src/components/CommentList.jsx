import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import {useSelector} from 'react-redux'

const CommentList = () => {
  // [store의 state접근방법]
  // 1. store내 있는 reducer의 key-> state.comment
  // 2. slice내 정의된 state 접근 -> state.comment.commentList

  // const commentList = useSelector(state=>state.comment.commentList)

  // 접근해야하는 state가 많으 경우, 아래와 같이 구조분해할당 문법으로 저장
  // *주의점 : 객체에 정의된 key이름과 동일한 변수명으로 정의를 해야한다
  const {commentList,keyword} = useSelector(state=>state.comment)

  //  검색키워드 결과를 보관하는 state
  const [filter,setFilter] = useState([])

  console.log(commentList,keyword);

  useEffect(()=>{

    if(keyword === ''){
      setFilter(commentList)
    }else{
      let list = commentList.filter((item)=>item.content.includes(keyword))
      setFilter(list)
    }

  },[commentList,keyword])

  return (
    <div>
      <div>댓글수:{filter.length}</div>
      <hr/>
      {filter.map((item)=>(
        <CommentItem key={item.id} comment={item}/>
      ))}
    </div>
  )
}
export default CommentList