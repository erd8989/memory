import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-tit'>두두리스트</h1>
      <TodoInput/>

      {/* 해야할일 */}
      <TodoList title={`해야할 일 ${TodoList.length}개`} checked={false}/>

      {/* 완료된 일 */}
      <TodoList title={'완료된 일 0개'} checked = {true}/>
    </div>
  )
}

export default TodoHome