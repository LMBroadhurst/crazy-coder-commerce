import { useSelector } from 'react-redux';
import CheckoutCard from '../components/CheckoutItemCard/CheckoutItemCard';
import FooterPrimary from '../components/Footer/Footer';
import HeaderPrimary from '../components/Header/Header';
import { selectCartItems, selectCartTotal } from '../store/cart/cartSelector';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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