import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';



const CheckoutCard = ( {cartItem} ) => {

    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

    const clearItemHandler = () =>
        clearItemFromCart(cartItem);

    const addItemHandler = () => 
        addItemToCart(cartItem);

    const removeItemHandler = () =>
        removeItemFromCart(cartItem);


  return (
    <>
        <section className='flex flex-row justify-between items-center w-1/3'>

            <div className='w-40'>
                <img src={imageUrl} alt={"product preview"}/>
            </div>

            <div className='flex flex-col'>
                <span>{name}</span>
                <span>£{price}</span>

                <div className='flex flex-row items-center'>
                    <span className='text-3xl pr-2' onClick={() => addItemHandler(cartItem)}>+</span>
                    <span className='px-2'>{quantity}</span>
                    <span className='text-3xl pl-2' onClick={() => removeItemHandler(cartItem)}>-</span>
                </div>
            </div>

            
            
            <span className='text-3xl' onClick={() => clearItemHandler(cartItem)}>X</span>
        </section>
    </>
  )
}

export default CheckoutCard 