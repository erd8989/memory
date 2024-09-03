import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import logger from 'redux-logger'

/*
store : state,reducer를 관리하는 역할
         하나의 프로젝트에 하나의 store만 생성

configureStore() : store를 생성하는 함수

middleware: action과 reducer 사이에 특정 함수를 실행하는 중간 처리기 역할

*/ 
export default configureStore({
    reducer:{
        counter : counterReducer
    },
    middleware: (getDefualtMiddleware)=> getDefualtMiddleware().concat(logger)

})