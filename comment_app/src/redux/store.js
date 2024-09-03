import {configureStore} from '@reduxjs/toolkit'
import CommentReducer from './reducers/CommentSlice'

export default configureStore({
    reducer:{
        comment:CommentReducer
    }
})