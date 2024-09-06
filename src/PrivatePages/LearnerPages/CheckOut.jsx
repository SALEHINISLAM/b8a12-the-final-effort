import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useFindTrainer from "../../hooks/useFindTrainer";
import { timing } from "../../SharedComponents/Timing";

const Checkout = () => {
  const { id } = useParams();
  console.log(id);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    userEmail,
    userName,
    bookedTrainer,
    isLoading,
    error: fetchingError,
    refetch,
  } = useFindTrainer();
  const ourTrainer = bookedTrainer?.find((trainer) => trainer._id == id);
  const totalPrice = 27;
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: userEmail || "anonymous",
            name: userName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        Swal.fire("Your payment is successful...");
        // now save the payment in the database
        const payment = {
          email: userEmail,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          trainer: ourTrainer?.
          trainerName,
          trainerId: ourTrainer?.
          trainerId,
          // status: "pending",
        };
        const response = await axiosSecure.patch(`/payment/${id}`);
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Thank you for the payment.",
            text: "Your have successfully confirmed your instructor...",
            showConfirmButton: false,
            timer: 1500,
          });
          //navigate("/dashboard/bookedTrainer");
        }
      }
    }
  };
  return (
    <div className="space-y-8">
      {isLoading ? (
        <>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </>
      ) : fetchingError ? (
        <p className="text-error">Error fetching data</p>
      ) : (
        <form onSubmit={handleSubmit} className="container mx-auto">
          <div className="card py-10 card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={
                  ourTrainer
                    ? ourTrainer.photoUrl
                    : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                }
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {ourTrainer && ourTrainer.trainerName}
              </h2>
              <p>Time : {ourTrainer && timing(ourTrainer.time)}</p>
              <p>Price: $27</p>
            </div>
          </div>
          <CardElement className="bg-white input input-bordered py-4" />
          <button
            className="btn btn-primary my-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600">
              {" "}
              Your transaction id: {transactionId}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default Checkout;
