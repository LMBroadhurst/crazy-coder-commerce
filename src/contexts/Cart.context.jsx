// import { createContext, useReducer } from "react";
// import { createAction } from "../Utils/reducer";

// export const addCartItem = (cartItems, productToAdd) => {

//     const existingCartItem = cartItems.find( (cartItem) => {
//         return cartItem.id === productToAdd.id;
//     });

//     if (existingCartItem) {
//         return cartItems.map( (cartItem) => cartItem.id === productToAdd.id
//             ? {...cartItem, quantity: cartItem.quantity + 1}
//             : cartItem
//         )
//     }

//     return [...cartItems, { ...productToAdd, quantity: 1 }]
// }


// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     removeItemFromCart: () => {},
//     clearItemFromCart: () => {},
//     cartCount: 0,
//     cartTotal: 0
// });


// export const removeCartItem = (cartItems, productToRemove) => {

//     const existingCartItem = cartItems.find( (cartItem) => {
//         return cartItem.id === productToRemove.id;
//     });

//     if (existingCartItem.quantity === 1) {
//         return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
//     }

//     return cartItems.map( (cartItem) => cartItem.id === productToRemove.id
//             ? {...cartItem, quantity: cartItem.quantity - 1}
//             : cartItem
//         )
// }


// export const clearCartItem = (cartItems, productToClear) => {
//     return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
// }


// // REDUCER


// const INITIAL_STATE = {
//     cartCount: 0,
//     cartTotal: 0,
//     cartItems: [],
//     isCartOpen: false
// }


// const CART_ACTION_TYPES = {
//     SET_CART_ITEMS: 'SET_CART_ITEMS',
//     SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
// }


// const cartReducer = (state, action) => {
//     // Business logic should be outside of reducer

//     const {type, payload} = action;


//     switch (type) {
//         case CART_ACTION_TYPES.SET_CART_ITEMS:
//             return {
//                 ...state,
//                 ...payload
//             };
//         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//             return {
//                 ...state,
//                 isCartOpen: payload,
//             };
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// }


// export const CartProvider = ({children}) => {

//     const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

//     const updateCartItemsReducer = (newCartItems) => {

//         const newCartCount = newCartItems.reduce( (total, cartItem) => total + cartItem.quantity, 0);

//         const newCartTotal = newCartItems.reduce( (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

//         dispatch( 
//             createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount })
//         );
//     };

//     const addItemToCart = (productToAdd) => {
//         const newCartItems = addCartItem(cartItems, productToAdd);
//         updateCartItemsReducer(newCartItems);
//     };

//     const removeItemFromCart = (productToRemove) => {
//         const newCartItems = removeCartItem(cartItems, productToRemove);
//         updateCartItemsReducer(newCartItems);
//     };

//     const clearItemFromCart = (productToClear) => {
//         const newCartItems = clearCartItem(cartItems, productToClear);
//         updateCartItemsReducer(newCartItems);
//     };

//     const setIsCartOpen = (bool) => {
//         dispatch( 
//             createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
//         );
//     };

//     const value = {isCartOpen, setIsCartOpen , addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }