import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/tournament/PaymentFrom"

const stripePromise = loadStripe('pk_test_51Moz1CFV8hMVqQzQH96smahOCpKUnMix9OMtfhQe3YjnaL4kpLa6An91ycTRcs26A7hZwgr0HelG4ElEdYBAEwbb00MpdTNJhb');
// console.log(stripePromise);
const PaymentPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
