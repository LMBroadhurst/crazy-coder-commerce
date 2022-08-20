import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector'; 


const CheckoutCard = ( {cartItem} ) => {

    const { name, imageUrl, price, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));

    const addItemHandler = () => 
        dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));


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