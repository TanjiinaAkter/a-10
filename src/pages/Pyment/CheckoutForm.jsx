import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const [calculation, setCalculation] = useState(0);
  const [cart, refetch] = useCarts();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  // 1.ekhane publishable key deyar pore........ single user er total purchase price ta niye server e send kortesi secret key pete karon sei client sk diye payment korte hobe,client secret key pawar mane hocche sob thik thak ase
  useEffect(() => {
    if (user?.email && cart.length > 0) {
      const subtotalPrice = cart.reduce(
        (acc, cartItem) => acc + (cartItem.itemPrice || cartItem.price),
        0
      );
      const tax = (subtotalPrice * 15) / 100;
      const finalCalculation = parseFloat((tax + subtotalPrice).toFixed(2));
      setCalculation(finalCalculation);
    }
  }, [cart, user]);
  console.log(calculation);
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  //2. ekhn payment er jonno client secret server theke req kore pacchi, useeffect use kortesi karon page load korbo
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        totalPrice: calculation,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, calculation]);
  //3. ekhn payment btn e click korle sei payment er kaj hobe
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // ekhn ekta payment method create kortesi mane card number cvc ar code eisob er disi kina vul kina segulo,,,, amader card diye ar type bole ditesi (kono payment kortesi na tk  diye)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      //kono error thakle set error kore show korbo
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    /// basic kaj sesh ekhn eituku test card diye check korte pari je kaj kortese kina inputs

    //4. ekhn confirm payment er kaj (stripe js e confirm card payment)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          // card element k amra card nam diye rakhsi so card e hobe
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        //5. SAVE ON DATABASE
        const payment = {
          email: user?.email,
          price: calculation,
          transactionId: paymentIntent.id,
          date: new Date(),
          // jei item add korse oi id gulo nibo
          cartIds: cart.map((item) => item._id),
          prodIds: cart.map((prod) => prod.productId),
          status: "pending",
        };
        axiosSecure.post("/payments", payment).then((res) => {
          console.log(res.data);
          refetch();
          if (res.data?.result?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment done successfully!!!!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/orderhistory");
          }
        });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}></CardElement>

      <button
        className="btn mt-7 bg-black text-white rounded-none"
        type="submit"
        // client secret ba stripe na thakle btn disable kore dicchi
        disabled={!stripe || !clientSecret}>
        Complete Purchase
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600 ">
          Your transaction id is :{transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
