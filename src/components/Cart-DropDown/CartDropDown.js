import ButtonA from '../Button/ButtonA'
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';


const CartDropDown = ( ) => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };


  return (
    <>
        <section className={`absolute z-10 bg-white h-auto w-64 p-2 border-4 rounded-md`}>

            <div className='flex flex-col items-stretch'>

              <section>
                {
                  cartItems.length ? cartItems.map( (cartItem) => {
                    return <CartItem key={cartItem.id} cartItem={cartItem} />
                  }) 
                  : <span>Cart is empty</span>
                }
              </section>

              <ButtonA type="button" buttonStyle="default" text="Go to Checkout" onClick={goToCheckoutHandler} />

            </div>

        </section>
    </>
  )
}

export default CartDropDown;