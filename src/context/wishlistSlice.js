import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : {
        value:[]
    },
    reducers:{

        toggleLike(state , action){
            let index = state.value?.findIndex(el => el.id === action.payload.id)
            if(index < 0){
                state.value = [ ...state.value ,  action.payload]
                toast.success("Added to wishlist");
            }else{
                state.value = state.value?.filter(el => el.id !== action.payload.id)
            }
        }
    }
})

export const {toggleLike} = wishlistSlice.actions
export default wishlistSlice.reducer