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
        <div>
            <span className='text-3xl' onClick={() => addItemHandler(cartItem)}>+</span>
            <span className='text-3xl' onClick={() => removeItemHandler(cartItem)}>-</span>
            <span className='text-3xl' onClick={() => clearItemHandler(cartItem)}>X</span>
        </div>
    </>
  )
}

export default CheckoutCard 