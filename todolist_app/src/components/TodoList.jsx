import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
import { useState,useEffect } from 'react'

const TodoList = ({title,checked}) => {
  const todoList = useSelector(state=>state.todo.todoList)

  console.log(todoList);
  
  return (
    <div className='todo-list'>

      <p className='todo-list-tit'>
          <h3>[{title}]</h3>
      </p>

      <ul className='todo-list-ul'>
        {todoList.map((todo)=>(
          todo.complete === checked? <TodoItem key={todo.id} todo={todo}/> : ''
        ))} 
      </ul>
    </div>
  )
}

export default TodoList