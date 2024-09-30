import { createSlice } from "@reduxjs/toolkit";

/*
createSlice(): state, reducer를 정의하는 함수

[필수요소]
1. name: reducer를 구분하기 위한 이름 정의(문자열)
2. initialState: 초기화할 state 정의(객체형태)
3. reducers: state변경요청을 수행하는 Action 기능 정의(객체형태)
*/

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count : 0
    },
    reducers:{
        increment:(state)=>{
            console.log('증가',state.count);
            state.count +=1
        },

        decrement:(state)=>{
            console.log('감소');

            if(state.count>0){
                state.count -= 1    
        }},

        increment2:(state,action)=>{
            /*
            action : type, payload를 묶은 객체형태
            type : 명령에 대한 구분값
            payload : 명령에 대한 값을 저장하는 속성
            ex) incrementByAmount({num: 2}) -> {type: 'counter/incrementByAmount', payload: {num: 2}}            
                                                    명령에 대한 구분                   전달받은 데이터
            */
            console.log(action.payload.num);
            state.count += action.payload.num
        },
        increment3:(state,action)=>{
            console.log('증가',state.count);
            state.count += action.payload.num
        },
        decrement2:(state,action)=>{
            console.log('감소');

            if(state.count>0){
                state.count -= action.payload.num   
        }},
    }
})

console.log(counterSlice);

// 컴포넌트에서 reducers내 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions

// store에서 counterSlice의 reducer(함수)를  접근할 수 있도록 내보내기
export default counterSlice.reducer