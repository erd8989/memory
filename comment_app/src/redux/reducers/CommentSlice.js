import { createSlice } from "@reduxjs/toolkit";


const CommentSlice = createSlice({
    name:'comment',

    initialState:{
        commentList :[],
        keyword:''
    },
    reducers:{
        addComment:(state,action)=>{
            // React state값을 직접적으로 수정X
            // -> push,shift,unshift등과 같은 함수는 원본을 수정하지 않고 새로운 배열을 반환
            // 
        },
        searchComment:(state,action)=>{
            state.keyword = action.payload.keyword
        }
    }
})   
export const CommentActions = CommentSlice.actions

export default CommentSlice.reducer