import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 1,
};

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        setTotalItems(state, action) {
            state.token = action.payload;
        },
        // add to cart
        // remove from cart
        // reset cart
    }
});

export const { setUser } = cartSlice.actions;
export default cartSlice.reducer;