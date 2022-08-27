import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { UserContext } from '../../contexts/User.context';
import ButtonA from '../Button/ButtonA';

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const { amount } = useContext(CartContext)
  const { currentUser } = useContext(UserContext)
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
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Yihua Zhang',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <>
        <section>
            <form onSubmit={paymentHandler}>
                <CardElement />
                <ButtonA text={"Pay Now"} type={"submit"} buttonStyle={"google"} />
            </form>
        </section>
    </>
  )
}

export default PaymentForm;