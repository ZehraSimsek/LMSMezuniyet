// import React, { useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import GlobalApi from "../../../../_utils/GlobalApi";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Link from 'next/link';

// function CourseEnroll({courseInfo , isUserAlreadyEnrolled}) {
//   const member = false;
//   const {user} = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     console.log("isUserAlreadyEnrolled" , isUserAlreadyEnrolled)
//   },[])

// const onEnrollCourse = () => {
//   GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
//   .then(resp => {
//       console.log(resp);
//       if(resp){
//         router.push('/watch-course/' + resp.createUserEnrollCourse.id);
//         toast.success('Başarıyla kaydoldunuz!', {
//           position: "top-center"
//         });
//       }

//   })
//   .catch(error => {
//     toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
//       position: "top-center"
//     });
//   });
// };


//   // return (
//   //   <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
//   //     <h2 className="text-[22px] font-bold text-white">Kursa Hemen Kaydol!</h2>
//   //     {user&& (member || courseInfo.free)&& !isUserAlreadyEnrolled? (
//   //       <div className="flex flex-col gap-3 mt-3">
//   //         <h2 className="text-white font-light">
//   //           Şimdi kaydolun ve öğrenmeye başlayın!
//   //         </h2>
//   //         <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700">
//   //           Kaydolun
//   //         </button>
//   //       </div>
//   //     ): (
//   //       <div className="flex flex-col gap-3 mt-3">
//   //         <h2 className="text-white font-light">
//   //           Şimdi üye olun ve öğrenmeye başlayın!
//   //         </h2>
//   //         <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 font-semibold">
//   //           Sadece $10 üye olun!
//   //         </button>
//   //       </div>
//   //     )}
//   //     {isUserAlreadyEnrolled && 
//   //         <div className="flex flex-col gap-3 mt-3">
//   //           <h2 className="text-white font-light">
//   //             Öğrenmeye devam edin!
//   //           </h2>
//   //           <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 font-semibold">
//   //             Devam et
//   //           </button>
//   //         </div>
//   //       }
//   //     <ToastContainer />

//   //   </div>
//   // );
//   return (
//     <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
//       <h2 className="text-[22px] font-bold text-white">{!isUserAlreadyEnrolled ? "Kursa Hemen Kaydol!" : "Öğrenmeye Devam Edin!"}</h2>
//       {user && (member || courseInfo.free) && !isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi kaydolun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg">
//             Kaydolun
//           </button>
//         </div>
//       ) : isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Öğrenmeye devam edin!
//           </h2>
//           <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
//             <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//               Devam et
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi üye olun ve öğrenmeye başlayın!
//           </h2>
//           <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//             Sadece $10 üye olun!
//           </button>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );

// }

// export default CourseEnroll;

// import React, { useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import GlobalApi from "../../../../_utils/GlobalApi";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Link from 'next/link';

// function CourseEnroll({courseInfo , isUserAlreadyEnrolled}) {
//   const member = false;
//   const {user} = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     console.log("isUserAlreadyEnrolled" , isUserAlreadyEnrolled)
//   },[])

// const onEnrollCourse = () => {
//   if (isUserAlreadyEnrolled) {
//     toast.info('Zaten bu kursa kaydoldunuz.', {
//       position: "top-center"
//     });
//     return;
//   }

//   GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
//   .then(resp => {
//       console.log(resp);
//       if(resp){
//         router.push('/watch-course/' + resp.createUserEnrollCourse.id);
//         toast.success('Başarıyla kaydoldunuz!', {
//           position: "top-center"
//         });
//       }

//   })
//   .catch(error => {
//     toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
//       position: "top-center"
//     });
//   });
// };

//   return (
//     <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
//       <h2 className="text-[22px] font-bold text-white">{!isUserAlreadyEnrolled ? "Kursa Hemen Kaydol!" : "Öğrenmeye Devam Edin!"}</h2>
//       {user && (member || courseInfo.free) && !isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi kaydolun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg">
//             Kaydolun
//           </button>
//         </div>
//       ) : isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Öğrenmeye devam edin!
//           </h2>
//           <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
//             <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//               Devam et
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi üye olun ve öğrenmeye başlayın!
//           </h2>
//           <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//             Sadece $10 üye olun!
//           </button>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );

// }

// export default CourseEnroll;


// import React, { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import GlobalApi from "../../../../_utils/GlobalApi";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Link from 'next/link';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./paymentForm";
// import Modal from 'react-modal';

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// function CourseEnroll({ courseInfo, isUserAlreadyEnrolled }) {
//   const member = false;
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled)
//   }, [])

//   const onEnrollCourse = () => {
//     if (isUserAlreadyEnrolled) {
//       toast.info('Zaten bu kursa kaydoldunuz.', {
//         position: "top-center"
//       });
//       return;
//     }

//     GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
//       .then(resp => {
//         console.log(resp);
//         if (resp) {
//           router.push('/watch-course/' + resp.createUserEnrollCourse.id);
//           toast.success('Başarıyla kaydoldunuz!', {
//             position: "top-center"
//           });
//         }

//       })
//       .catch(error => {
//         toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
//           position: "top-center"
//         });
//       });
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
//       <h2 className="text-[22px] font-bold text-white">{!isUserAlreadyEnrolled ? "Kursa Hemen Kaydol!" : "Öğrenmeye Devam Edin!"}</h2>
//       {user && (member || courseInfo.free) && !isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi kaydolun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg">
//             Kaydolun
//           </button>
//         </div>
//       ) : isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Öğrenmeye devam edin!
//           </h2>
//           <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
//             <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//               Devam et
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi üye olun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={openModal} className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//             Sadece $10 üye olun!
//           </button>
//           <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             contentLabel="Ödeme Formu"
//           >
//             <Elements stripe={stripePromise}>
//               <PaymentForm courseInfo={courseInfo} />
//             </Elements>
//             <button onClick={closeModal}>Kapat</button>
//           </Modal>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default CourseEnroll;


// import React, { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import GlobalApi from "../../../../_utils/GlobalApi";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Link from 'next/link';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./paymentForm";
// import Modal from 'react-modal';
// import { keyframes } from '@emotion/react';
// import styled from '@emotion/styled';

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const slideIn = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

// const StyledModal = styled(Modal)`
//   animation: ${slideIn} 0.5s ease-out forwards;
//   position: fixed;
//   right: 0;
// `;

// function CourseEnroll({ courseInfo, isUserAlreadyEnrolled }) {
//   const member = false;
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled)
//   }, [])

//   const onEnrollCourse = () => {
//     if (isUserAlreadyEnrolled) {
//       toast.info('Zaten bu kursa kaydoldunuz.', {
//         position: "top-center"
//       });
//       return;
//     }

//     GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
//       .then(resp => {
//         console.log(resp);
//         if (resp) {
//           router.push('/watch-course/' + resp.createUserEnrollCourse.id);
//           toast.success('Başarıyla kaydoldunuz!', {
//             position: "top-center"
//           });
//         }

//       })
//       .catch(error => {
//         toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
//           position: "top-center"
//         });
//       });
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
//       <h2 className="text-[22px] font-bold text-white">{!isUserAlreadyEnrolled ? "Kursa Hemen Kaydol!" : "Öğrenmeye Devam Edin!"}</h2>
//       {user && (member || courseInfo.free) && !isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi kaydolun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg">
//             Kaydolun
//           </button>
//         </div>
//       ) : isUserAlreadyEnrolled ? (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Öğrenmeye devam edin!
//           </h2>
//           <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
//             <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//               Devam et
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-3 mt-3">
//           <h2 className="text-white font-light">
//             Şimdi üye olun ve öğrenmeye başlayın!
//           </h2>
//           <button onClick={openModal} className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
//             Sadece $10 üye olun!
//           </button>
//           <StyledModal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             contentLabel="Ödeme Formu"
//             style={{
//               content: {
//                 top: '50%',
//                 right: '0',
//                 transform: 'translateY(-50%)',
//                 width: '400px', 
//               },
//             }}
//           >
//             <Elements stripe={stripePromise}>
//               <PaymentForm courseInfo={courseInfo} />
//             </Elements>
//             <button onClick={closeModal}>Kapat</button>
//           </StyledModal>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default CourseEnroll;


import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "../../../../_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./paymentForm";
import Modal from 'react-modal';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa'; 

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledModal = styled(Modal)`
  animation: ${slideIn} 0.5s ease-out forwards;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;


function CourseEnroll({ courseInfo, isUserAlreadyEnrolled }) {
  const member = false;
  const { user } = useUser();
  const router = useRouter();
  const [price, setPrice] = useState(courseInfo.price);

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled)
    console.log("courseInfo", courseInfo.price);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await GlobalApi.getLeadCount();
      let firstUserEmail = result[0].email;
      console.log("firstemail", firstUserEmail);
  
      if (user?.primaryEmailAddress?.emailAddress === firstUserEmail) {
        setPrice(prevPrice => prevPrice - 10);
      }
    };
    fetchData();
  }, [user?.primaryEmailAddress?.emailAddress]);
  

  const onEnrollCourse = () => {
    if (isUserAlreadyEnrolled) {
      toast.info('Zaten bu kursa kaydoldunuz.');
      return;
    }

    GlobalApi.enrollToCourse(courseInfo?.id, user?.primaryEmailAddress?.emailAddress)
    .then(resp => {
      console.log(resp);
      if (resp) {
        router.push('/watch-course/' + resp.createUserEnrollCourse.id);
        toast.success('Başarıyla kaydoldunuz!');
        GlobalApi.GetCounter(courseInfo?.id).then(resp => {
          let counterEnrollValue = resp.courseList.counterEnroll;
          console.log(counterEnrollValue); 
          counterEnrollValue = counterEnrollValue + 1 ;
          GlobalApi.counterEnroll(courseInfo?.id, counterEnrollValue).then(resp => {
            console.log(resp);
          });
        })
      }
    })
    .catch(error => {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
      });
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
      <h2 className="text-[22px] font-bold text-white">{!isUserAlreadyEnrolled ? "Kursa Hemen Kaydol!" : "Öğrenmeye Devam Edin!"}</h2>
      {user && (member || courseInfo.free) && !isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi kaydolun ve öğrenmeye başlayın!
          </h2>
          <button onClick={() => onEnrollCourse()} className="bg-white text-purple-700 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg">
            Kaydolun
          </button>
        </div>
      ) : isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Öğrenmeye devam edin!
          </h2>
          <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
            <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
              Devam et
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi üye olun ve öğrenmeye başlayın!
          </h2>
          <button onClick={openModal} className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 px-4 py-2 rounded-lg font-semibold">
            Sadece ₺{price} üye olun!
          </button>
          <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Ödeme Formu"
          >
            <Elements stripe={stripePromise}>
              <PaymentForm courseInfo={courseInfo} />
            </Elements>
            <button onClick={closeModal} style={{ border: 'none', background: 'transparent', cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }}>
              <FaTimes size={20} />
            </button>
          </StyledModal>
        </div>
      )}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    </div>
  );
}

export default CourseEnroll;

