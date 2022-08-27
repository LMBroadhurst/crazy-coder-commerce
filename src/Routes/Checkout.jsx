import { useContext } from 'react';
import CheckoutCard from '../components/CheckoutItemCard/CheckoutItemCard';
import FooterPrimary from '../components/Footer/Footer';
import HeaderPrimary from '../components/Header/Header';
import { CartContext } from '../contexts/Cart.context';


const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
        <HeaderPrimary />

        <h2>Checkout</h2>

        <section>
            {
                cartItems.map( (cartItem) => {
                    
                    return (
                        <CheckoutCard cartItem={cartItem} />
                    )
                })
            }
            <span>Total: £{cartTotal}</span>
        </section>
        <FooterPrimary />
    </>
  )
}

export default Checkout;