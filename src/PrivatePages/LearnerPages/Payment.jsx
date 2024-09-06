import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./CheckOut";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);
const Payment = () => {
    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkout/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;