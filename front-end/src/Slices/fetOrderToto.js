import { createSlice,nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    orderList: []
}

const orderSlice = createSlice({ 
    name:"order",
    initialState,
    reducers:{
        addOrder: (state,action) => {
            state.orderList.push(action.payload)
        }
    }
})

export {addOrder} from orderSlice.actions;
export default orderSlice.reducer;