import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// counterSlice 내 정의된 reducer함수를 접근하기 위한 임포트
import { CounterActions } from '../redux/reducers/counterSlice'

const Counter = () => {

    // useSelector(): store에 보관된 state를 접근하기 위한 함수
    //  매개변수 : state -> store에 보관된 정보를 객체로 반환
    const count = useSelector(state=>state.counter.count)
    console.log(count);
    // useDispatch(): state를 변경하기 위한 명령을 보내는 함수
    const dispatch = useDispatch()

    const handleClick1 = ()=>{
        dispatch(CounterActions.increment())
    }

    const handleClick2 = ()=>{
        dispatch(CounterActions.decrement())
    }

    const handleClick3 = ()=>{
        dispatch(CounterActions.increment2({num : 2}))
    }
    
    const handleClick4 = ()=>{
        dispatch(CounterActions.increment3({num : 10}))
    }
    
    const handleClick5 = ()=>{
        dispatch(CounterActions.decrement2({num : 10}))
    }

  return (
    <div>
        <h1>Redux Toolkit 활용 실습</h1>
        <h1>{count}</h1>

        <button onClick={handleClick1}>증가</button>
        <button onClick={handleClick2}>감소</button>
        <button onClick={handleClick3}>2씩 증가</button>
        <button onClick={handleClick4}>10씩 증가</button>
        <button onClick={handleClick5}>10씩 감소</button>


    </div>
  )
}
export default Counter