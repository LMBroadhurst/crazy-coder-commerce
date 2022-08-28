import { useContext } from 'react';
import CheckoutCard from '../components/CheckoutItemCard/CheckoutItemCard';
import FooterPrimary from '../components/Footer/Footer';
import HeaderPrimary from '../components/Header/Header';
import PaymentForm from '../components/PaymentForm/PaymentForm';
import { CartContext } from '../contexts/Cart.context';


const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
        <HeaderPrimary />

        <section className='md:w-2/3 xl:w-1/2 px-5 mx-auto bg-black text-white flex flex-col'>

            <h2 className='self-center text-4xl my-7 border-black border-b-2'>Checkout</h2>

            <section className='flex flex-col'>
                {
                    cartItems.length ? cartItems.map( (cartItem) => {
                        
                        return (
                            <CheckoutCard cartItem={cartItem} />
                        )
                    }) : <span className='text-xl py-20 self-center'>Head to the store and add items to your basket :)</span>
                }
            </section>

            <span className='my-3 text-4xl pb-5 border-b-4 border-glowGreen text-center'>Total: £{cartTotal}</span>

            <PaymentForm />

        </section>

        <FooterPrimary />
    </>
  )
}

export default Checkout;