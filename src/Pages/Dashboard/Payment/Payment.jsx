import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Pay And Eat' heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
            </Elements>

        </div>
    )
}
export default Payment;