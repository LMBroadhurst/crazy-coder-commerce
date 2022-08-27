import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ButtonA from '../Button/ButtonA';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return
        }

        
    }

  return (
    <>
        <section>
            <form>
                <CardElement />
                <ButtonA text={"Pay Now"} type={"submit"} buttonStyle={"google"} />
            </form>
        </section>
    </>
  )
}

export default PaymentForm;