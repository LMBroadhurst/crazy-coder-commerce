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
        <section className='flex flex-row justify-between items-center bg-slate-800 pb-3 pt-5 md:pt-8 px-5 md:px-10 my-2 text-white'>

            <div className='w-16 sm:w-24 md:w-40'>
                <img src={imageUrl} alt={"product preview"}/>
            </div>

            <div className='flex flex-col items-center'>
                <span className='py-1 text-md md:text-xl md:py-2'>{name}</span>
                <span className='py-1 text-md md:text-xl md:py-2'>£{price}</span>

                <div className='flex flex-row items-center py-1 md:py-2'>
                    <span className='text-3xl pr-2 cursor-pointer' onClick={() => addItemHandler(cartItem)}>+</span>
                    <span className='px-2'>{quantity}</span>
                    <span className='text-3xl pl-2 cursor-pointer' onClick={() => removeItemHandler(cartItem)}>-</span>
                </div>
            </div>

            
            
            <span className='text-3xl cursor-pointer' onClick={() => clearItemHandler(cartItem)}>X</span>
        </section>
    </>
  )
}

export default CheckoutCard 