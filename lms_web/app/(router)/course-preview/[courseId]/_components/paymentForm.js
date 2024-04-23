// import {
//     CardElement,
//     PaymentElement,
//     PaymentRequestButtonElement,
//     useElements,
//     useStripe,
//   } from "@stripe/react-stripe-js";
//   import React, { useState } from "react";
  
//   function PaymentForm() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const stripe = useStripe();
//     const elements = useElements();
  
//     const createSubscription = async () => {
//       try {
//         const paymentMethod = await stripe.createPaymentMethod({
//           card: elements.getElement("card"),
//           type: "card",
//         });
//         const response = await fetch(`/api/subscribe`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             paymentMethod: paymentMethod.paymentMethod.id,
//           }),
//         });
//         if (!response.ok) return alert("Payment unsuccessful!");
//         const data = await response.json();
//         const confirm = await stripe.confirmCardPayment(data.clientSecret);
//         if (confirm.error) return alert("Payment unsuccessful!");
//         alert("Payment Successful! Subscription active.");
//       } catch (err) {
//         console.error(err);
//         alert("Payment failed! " + err.message);
//       }
//     };
  
//     return (
//         <div className="w-1/2 mx-auto p-4 shadow-md rounded">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </label>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </label>
//           <div className="my-3">
//             <CardElement />
//           </div>
//           <button
//             onClick={createSubscription}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Subscribe - 5 INR
//           </button>
//         </div>
//       );
//     }
  
//   export default PaymentForm;

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import GlobalApi from "../../../../_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

function PaymentForm({ courseInfo }) {
  const [name, setName] = useState("");
  const { user } = useUser();
  const [email, setEmail] = useState(user.primaryEmailAddress.emailAddress);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });
      const response = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();
      const confirm = await stripe.confirmCardPayment(data.clientSecret);
      if (confirm.error) return alert("Payment unsuccessful!");
      alert("Payment Successful! Subscription active.");

      // Ödeme başarılı olduğunda kursa kaydol
      GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
        .then(resp => {
          console.log(resp);
          if (resp) {
            router.push('/watch-course/' + resp.createUserEnrollCourse.id);
            toast.success('Başarıyla kaydoldunuz!', {
              position: "top-center"
            });
          }
        })
        .catch(error => {
          toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
            position: "top-center"
          });
        });
    } catch (err) {
      console.error(err);
      alert("Payment failed! " + err.message);
    }
  };

  return (
    <div className="w-1/2 mx-auto p-4 shadow-md rounded">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email:
        <input
          type="email"
          value={email}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <div className="my-3">
        <CardElement />
      </div>
      <button
        onClick={createSubscription}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Subscribe - 5 INR
      </button>
    </div>
  );
}

export default PaymentForm;