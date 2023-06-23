import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            let isNewItem = true;
            for(let i = 0; i < state.cartItems.length; i++) {
                let item = state.cartItems[i];
                if(item.id === newItem.id && 
                    item.selectedSize === newItem.selectedSize) {
                        item.quantity++;
                        isNewItem = false;
                        break;
                }
            }
            if(isNewItem) {
                state.cartItems.push({ ...newItem, quantity: 1})
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer