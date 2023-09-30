import React from "react";
import "./Payment.css";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart]=useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price=parseFloat(total.toFixed(2));
  return (
    <div className="payment border border-green-500 w-full my-32 p-20">
      <h2 className="text-3xl font-medium mb-16 text-center">PAYMENT</h2>
      <Elements stripe={stripePromise} >
        <CheckoutForm price={price} cart={cart}/>
      </Elements>
    </div>
  );
};

export default Payment;
