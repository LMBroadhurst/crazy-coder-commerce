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

        <section className='md:w-2/3 xl:w-1/2 px-5 mx-auto bg-slate-300 flex flex-col'>

            <h2 className='self-center text-slate-800 text-4xl my-5 pb-2 border-black border-b-2'>Checkout</h2>

            <section>
                {
                    cartItems.map( (cartItem) => {
                        
                        return (
                            <CheckoutCard cartItem={cartItem} />
                        )
                    })
                }
            </section>

            <span className='my-3 text-2xl'>Total: £{cartTotal}</span>

        </section>

        <PaymentForm />
        <FooterPrimary />
    </>
  )
}

export default Checkout;