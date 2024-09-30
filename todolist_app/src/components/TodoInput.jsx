import React from 'react'
import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/reducers/TodoSlice';
import { v4 as uuid4} from 'uuid'

const TodoInput = () => {
  const inputRef = useRef()

  const dispatch = useDispatch()

  const handelSearch =()=>{
    dispatch(addTodo({id:uuid4(), text:inputRef.current.value, complete:false}))
}
  
  return (
    <div className='todo-inputbox'>
      <input type='text' className='todo-inputbox-input' placeholder='할 일을 입력하세요' ref={inputRef}></input>
      <input type='button' className='todo-inputbox-add-btn' value='등록' onClick={handelSearch}/>
    </div>
  )
}

export default TodoInput