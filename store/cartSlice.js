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
                        item.totalPriceCartItem = item.attributes.priceProduct * item.quantity;
                        state.cartItems = [...state.cartItems];
                        isNewItem = false;
                        break;
                }
            }
            if(isNewItem) {
                state.cartItems.push({ ...newItem, quantity: 1})
            }
        },
        updateCartItem: (state, action) => {
            state.cartItems = state.cartItems.map((item, index) => {
                if(index === action.payload.id) {
                    if(action.payload.key === "quantity") {
                        item.totalPriceCartItem = item.attributes.priceProduct * action.payload.value;
                    }
                    return { ...item, [action.payload.key]: action.payload.value };
                }
                return item;
            })
        },
        removeCartItem: (state, action) => {
            console.log("action.payload.id ==>", action.payload.id);
            state.cartItems = state.cartItems.filter((item, index) => index !== action.payload.id)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer