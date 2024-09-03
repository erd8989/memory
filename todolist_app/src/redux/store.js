import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './reducers/TodoSlice'
import logger from 'redux-logger'

export default configureStore({
    reducer:{
        todo : todoReducer
    },
    middleware: (getDefualtMiddleware)=> getDefualtMiddleware().concat(logger)

})