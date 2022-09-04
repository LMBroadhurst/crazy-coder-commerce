import { faStripe } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { UserContext } from '../../contexts/User.context';
import ButtonA from '../Button/ButtonA';

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, cartItems } = useContext(CartContext);
  const { currentUser, orders, addOrder } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/CreatePaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 100 * cartTotal }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Lewis Broadhurst',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
        const orderDetails = {
          orderTotal: cartTotal,
          orderProducts: cartItems,
        };
        addOrder(orders, orderDetails)
      }
    }
  };

  return (
    <>
        <section className='flex flex-col items-stretch my-5 bg-slate-600 text-black'>

          <h3 className='self-center text-3xl py-7 text-white'>Pay below with Stripe</h3>

          <form onSubmit={paymentHandler} className="flex flex-col items-stretch justify-center">

            <div className='w-11/12 px-2 mx-auto py-4 mb-5 sm:w-2/3 bg-white'>
              <CardElement />
            </div>

            <div className='flex justify-center w-1/2 mx-auto mb-5'>
              <ButtonA text={"Pay Now"} type={"submit"} buttonStyle={"google"} />
            </div>

          </form>

        </section>
    </>
  )
}

export default PaymentForm;