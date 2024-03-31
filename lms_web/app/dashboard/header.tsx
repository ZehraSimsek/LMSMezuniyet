// "use client"
// import React from 'react';
// import { UserButton } from '@clerk/nextjs';
// import Image from 'next/image';
// import { FaChalkboardTeacher } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom';

// export default function Header({ name, isTeacher }) {
//   const history = useHistory();

//   const handleSignOut = async () => {
//     await auth.signOut(() => {
//       history.push('/'); 
//     });
//   };

//   // const handleTeacherMode = async () => {
//   //   'use server';
//   // };

//   return (
//     <nav className="flex items-center justify-between p-5 rounded-3xl bg-custom-color shadow-md w-full fixed top-0 left-0">
//       <div className="flex items-center space-x-2">
//         <Image
//           src="/logo.png"
//           alt=""
//           width={50}
//           height={50}
//           className="rounded-full shadow-2xl"
//         />
//         <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//       </div>
//       <div className="flex items-center space-x-2">
//         {/* {isTeacher && (
//           <button onClick={handleTeacherMode} className="flex items-center space-x-2">
//             <FaChalkboardTeacher />
//             <span>Öğretmen Moduna Geç</span>
//           </button>
//         )} */}
//         <span>Merhaba, {name}</span>
//         <UserButton onSignOut={handleSignOut} />
//       </div>
//     </nav>
//   );
// }


// import React, { useEffect } from 'react';
// import { UserButton, useUser, useSession } from '@clerk/nextjs';
// import Image from 'next/image';
// import { FaChalkboardTeacher } from 'react-icons/fa';
// import { useRouter } from 'next/router';

// export default function Header({ name, isTeacher }) {
//   const { signOut } = useUser();
//   const { session, renew } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     // Oturumu yenile
//     renew();
//   }, []);

//   const handleSignOut = async () => {
//     await signOut();
//     router.push('/'); 
//   };

//   // const handleTeacherMode = async () => {
//   //   'use server';
//   // };

//   return (
//     <nav className="flex items-center justify-between p-5 rounded-3xl bg-custom-color shadow-md w-full fixed top-0 left-0">
//       <div className="flex items-center space-x-2">
//         <Image
//           src="/logo.png"
//           alt=""
//           width={50}
//           height={50}
//           className="rounded-full shadow-2xl"
//         />
//         <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//       </div>
//       <div className="flex items-center space-x-2">
//         {/* {isTeacher && (
//           <button onClick={handleTeacherMode} className="flex items-center space-x-2">
//             <FaChalkboardTeacher />
//             <span>Öğretmen Moduna Geç</span>
//           </button>
//         )} */}
//         <span>Merhaba, {session.firstName}</span>
//         <UserButton onSignOut={handleSignOut} />
//       </div>
//     </nav>
//   );
// }

// import { useState, useEffect, useRef } from 'react';
// import { useUser, useSession } from '@clerk/clerk-react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import Image from 'next/image';
// import {UserButton} from "@clerk/nextjs"; 
// import { FaChalkboardTeacher } from 'react-icons/fa';

// export default function Header({ name, loginType }) {
//   const { signOut } = useUser();
//   const { renew } = useSession();
//   const router = useRouter();

//   const sessionTimeout = 60 * 60 * 1000; 
//   const sessionTimer = useRef(null);
//   console.log("skdfjksdf" , loginType)

//   useEffect(() => {
//     //renew();
//     sessionTimer.current = setTimeout(async () => {
//       await signOut();
//       router.push('/');
//       toast.success("Oturum süresi doldu. Otomatik olarak çıkış yapıldı.", {
//         position: toast.POSITION.TOP_CENTER
//       });
//     }, sessionTimeout);

//     return () => clearTimeout(sessionTimer.current);
//   }, []);

//   const handleSignOut = async () => {
//     clearTimeout(sessionTimer.current); 
//     await signOut();
//     router.push('/'); 
//     toast.success("Başarıyla çıkış yapıldı!", {
//       position: toast.POSITION.TOP_CENTER
//     });
//   };

//   const handleTeacherMode = async () => {
//     //'use server';
//   };

//   return (
//     <nav className="flex items-center justify-between p-5 rounded-3xl bg-custom-color shadow-md w-full fixed top-0 left-0">
//       <div className="flex items-center space-x-2">
//         <Image
//           src="/logo.png"
//           alt=""
//           width={50}
//           height={50}
//           className="rounded-full shadow-2xl"
//         />
//         <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//       </div>
//       <div className="flex items-center space-x-2">
//         {loginType === 'instructor' && (
//           <button onClick={handleTeacherMode} className="flex items-center space-x-2">
//             <span>Öğretmen Moduna Geç</span>
//             <FaChalkboardTeacher />
//           </button>
//         )}
//         <span>Merhaba, {name}</span>
//         <UserButton onSignOut={handleSignOut} />
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useUser, useSession } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { UserButton } from "@clerk/nextjs"; 
import { FaChalkboardTeacher } from 'react-icons/fa';
import { UserRoleContext } from '../context/UserRoleContext'; 

export default function Header({ name }) {
  const { signOut } = useUser();
  const { renew } = useSession();
  const router = useRouter();
  const userRole = useContext(UserRoleContext); 

  const sessionTimeout = 60 * 60 * 1000; 
  const sessionTimer = useRef(null);

  useEffect(() => {
    //renew();
    sessionTimer.current = setTimeout(async () => {
      await signOut();
      router.push('/');
      toast.success("Oturum süresi doldu. Otomatik olarak çıkış yapıldı.", {
        position: toast.POSITION.TOP_CENTER
      });
    }, sessionTimeout);

    return () => clearTimeout(sessionTimer.current);
  }, []);

  const handleSignOut = async () => {
    clearTimeout(sessionTimer.current); 
    await signOut();
    router.push('/'); 
    toast.success("Başarıyla çıkış yapıldı!", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const handleRoleChange = (userRole) => {
    toast.success(`${userRole} moduna geçtiniz!`, {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <nav className="flex items-center justify-between p-5 rounded-3xl bg-custom-color shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full shadow-2xl"
        />
        <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
      </div>
      <div className="flex items-center space-x-2">
        {userRole === 'Öğretmen' && (
          <button onClick={handleRoleChange} className="flex items-center space-x-2">
            <span>Öğretmen Moduna Geç</span>
            <FaChalkboardTeacher />
          </button>
        )}
        <span>Merhaba, {name}</span>
        <UserButton onSignOut={handleSignOut} />
      </div>
    </nav>
  );
}
