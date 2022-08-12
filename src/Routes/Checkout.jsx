import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart.context';

const Checkout = () => {

    const { cartItems, cartTotal, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);


  return (
    <>
        <h2>Checkout</h2>

        <section>
            {
                cartItems.map( (cartItem) => {
                    const {id, name, quantity} = cartItem;
                    return (
                        <div>
                            <h2 key={id}>{name} | {quantity}</h2>
                            <span className='text-3xl' onClick={() => addItemToCart(cartItem)}>+</span>
                            <span className='text-3xl' onClick={() => removeItemFromCart(cartItem)}>-</span>
                            <span className='text-3xl' onClick={() => clearItemFromCart(cartItem)}>X</span>
                        </div>
                    )
                })
            }
            <span>Total: £{cartTotal}</span>
        </section>
    </>
  )
}

export default Checkout;