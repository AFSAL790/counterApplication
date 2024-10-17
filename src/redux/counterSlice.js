import { createSlice } from "@reduxjs/toolkit";


// createSlice()- returns automatically reducer as well as  action
export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    /*actions*/
    reducers:{
        increament : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset :(state)=>{
            state.value=0
        },
        range : (state)=>{
            state.value=0
        },
        changeRange :(state , action)=>{
            state.value += action.payload 

        }


    }
})

// action are need to component
export const {increament , decrement , reset , range , changeRange } = counterSlice.actions


//  reducers are need to store to update state
export default counterSlice.reducer