"use client"
// import React, { useState, useEffect } from "react"
// import { Link as ScrollLink } from "react-scroll/modules"
// import Link from "next/link"
// import { IoMdMenu, IoMdClose } from "react-icons/io"
// import Image from "next/image"
// import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
// import { useRouter } from 'next/navigation'


// interface NavItem {
//   label: string
//   page: string
// }

// const Nav_Items: Array<NavItem> = [
//   {
//     label: "Anasayfa",
//     page: "home",
//   },
//   {
//     label: "Hakkımızda",
//     page: "about",
//   },
//   {
//     label: "Kategorilerimiz",
//     page: "category",
//   },
//   {
//     label: "İletişim",
//     page: "contact",
//   },
// ]

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false)
//   const user = useUser()
//   const router = useRouter()

//   useEffect(() => {
//     if (user) {
//       router.push('/')
//     }
//   }, [user])

//   return (
//     <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow-2xl shadow-blue-200 cursor-pointer`}>
//       <div className="flex justify-between items-center md:flex">
//         <div className="flex items-center justify-between py-3 md:py-5 md:block">
//           <ScrollLink to="home">
//             <div className="container flex items-center space-x-2 cursor-pointer">
//               <Image
//                 src="/logo.png"
//                 alt=""
//                 width={50}
//                 height={50}
//                 className="rounded-full shadow-2xl"
//               />
//               <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//             </div>
//           </ScrollLink>
//           <div className="md:hidden">
//             <button
//               className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
//             </button>
//           </div>
//         </div>

//         <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
//       <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//         {Nav_Items.map((item, idx) => {
//           return (
//             <ScrollLink
//               key={idx}
//               to={item.page}
//               className={
//                 "block lg:inline-block font-semibold text-cyan-700 hover:text-neutral-500 dark:text-neutral-100 relative cursor-pointer"
//               }
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               onClick={() => setNavbar(!navbar)}
//             >
//               {item.label}
//               <span className="absolute left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform ease-in-out duration-500 origin-right hover:scale-x-100"></span>
//             </ScrollLink>
//           )
//         })}
//       </div>
//     </div>

//     <div className="flex space-x-4">
//       <Link href="/sign-in" className="bg-blue-100 hover:bg-blue-700 shadow-2xl text-blue font-bold py-2 px-4 rounded flex items-center">
//         <Image
//           src="/login.svg" 
//           alt="Giriş Yap"
//           width={20}
//           height={20}
//         />
//         <span className="ml-2">Giriş Yap</span>
//       </Link>
//       <Link href="/sign-up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Ücretsiz Kaydolun
//       </Link>
//     </div>

//     </div>
//     </header>
//   )
// }

// "use client"
// import React, { useState } from "react"
// import { Link as ScrollLink } from "react-scroll/modules"
// import Link from "next/link"
// import { IoMdMenu, IoMdClose } from "react-icons/io"
// import Image from "next/image"
// import { useRouter } from 'next/router'

// interface NavItem {
//   label: string
//   page: string
// }

// const Nav_Items: Array<NavItem> = [
//   {
//     label: "Anasayfa",
//     page: "home",
//   },
//   {
//     label: "Hakkımızda",
//     page: "about",
//   },
//   {
//     label: "Kategorilerimiz",
//     page: "category",
//   },
//   {
//     label: "İletişim",
//     page: "contact",
//   },
// ]

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false)
//   const router = useRouter()

//   const handleClick = (href) => {
//     router.push(href)
//   }
//   return (
//     <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow-2xl shadow-blue-200 cursor-pointer`}>
//       <div className="flex justify-between items-center md:flex">
//         <div className="flex items-center justify-between py-3 md:py-5 md:block">
//           <ScrollLink to="home">
//             <div className="container flex items-center space-x-2 cursor-pointer">
//               <Image
//                 src="/logo.png"
//                 alt=""
//                 width={50}
//                 height={50}
//                 className="rounded-full shadow-2xl"
//               />
//               <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//             </div>
//           </ScrollLink>
//           <div className="md:hidden">
//             <button
//               className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
//             </button>
//           </div>
//         </div>

//         <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
//       <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//         {Nav_Items.map((item, idx) => {
//           return (
//             <ScrollLink
//               key={idx}
//               to={item.page}
//               className={
//                 "block lg:inline-block font-semibold text-cyan-700 hover:text-neutral-500 dark:text-neutral-100 relative cursor-pointer"
//               }
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               onClick={() => setNavbar(!navbar)}
//             >
//               {item.label}
//               <span className="absolute left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform ease-in-out duration-500 origin-right hover:scale-x-100"></span>
//             </ScrollLink>
//           )
//         })}
//       </div>
//     </div>

//     <div className="flex space-x-4">
//       <div
//         onClick={() => handleClick('/sign-in')}
//         className="bg-blue-100 hover:bg-blue-700 shadow-2xl text-blue font-bold py-2 px-4 rounded flex items-center"
//       >
//         <Image
//           src="/login.svg" 
//           alt="Giriş Yap"
//           width={20}
//           height={20}
//         />
//         <span className="ml-2">Giriş Yap</span>
//       </div>
//       <div
//         onClick={() => handleClick('/sign-up')}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Ücretsiz Kaydolun
//       </div>
//     </div>
//       </div>
//     </header>
//   )
// }
"use client"
// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll/modules";
// import Link from "next/link";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import Image from "next/image";

// interface NavItem {
//   label: string;
//   page: string;
// }

// const Nav_Items: Array<NavItem> = [
//   {
//     label: "Anasayfa",
//     page: "home",
//   },
//   {
//     label: "Hakkımızda",
//     page: "about",
//   },
//   {
//     label: "Kategorilerimiz",
//     page: "category",
//   },
//   {
//     label: "İletişim",
//     page: "contact",
//   },
// ];

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   const handleLinkClick = () => {
//     setNavbar(false);
//   };

//   return (
//     <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow-2xl shadow-blue-200 cursor-pointer`}>
//       <div className="flex justify-between items-center md:flex">
//         <div className="flex items-center justify-between py-3 md:py-5 md:block">
//           <ScrollLink to="home">
//             <div className="container flex items-center space-x-2 cursor-pointer">
//               <Image
//                 src="/logo.png"
//                 alt=""
//                 width={50}
//                 height={50}
//                 className="rounded-full shadow-2xl"
//               />
//               <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
//             </div>
//           </ScrollLink>
//           <div className="md:hidden">
//             <button
//               className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
//             </button>
//           </div>
//         </div>

//         <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
//           <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//             {Nav_Items.map((item, idx) => {
//               return (
//                 <ScrollLink
//                   key={idx}
//                   to={item.page}
//                   className={
//                     "block lg:inline-block font-semibold text-cyan-700 hover:text-neutral-500 dark:text-neutral-100 relative cursor-pointer"
//                   }
//                   activeClass="active"
//                   spy={true}
//                   smooth={true}
//                   offset={-100}
//                   duration={500}
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {item.label}
//                   <span className="absolute left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform ease-in-out duration-500 origin-right hover:scale-x-100"></span>
//                 </ScrollLink>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex space-x-4">
//         <Link href="/sign-in">
//           <div className="bg-blue-100 hover:bg-blue-700 shadow-2xl text-blue font-bold py-2 px-4 rounded flex items-center" onClick={handleLinkClick}>
//             <Image
//               src="/login.svg" 
//               alt="Giriş Yap"
//               width={20}
//               height={20}
//             />
//             <span className="ml-2">Giriş Yap</span>
//           </div>
//         </Link>
//           <Link href="/sign-up">
//             <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLinkClick}>
//               Ücretsiz Kaydolun
//             </div>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll/modules"
import Link from "next/link"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"

interface NavItem {
  label: string
  page: string
}

const Nav_Items: Array<NavItem> = [
  {
    label: "Anasayfa",
    page: "home",
  },
  {
    label: "Hakkımızda",
    page: "about",
  },
  {
    label: "Kategorilerimiz",
    page: "category",
  },
  {
    label: "İletişim",
    page: "contact",
  },
]

export default function Navbar() {
  const [navbar, setNavbar] = useState(false) 

  return (
    <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow-2xl shadow-blue-200 cursor-pointer`}>
      <div className="flex justify-between items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <ScrollLink to="home">
            <div className="container flex items-center space-x-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full shadow-2xl"
              />
              <h2 style={{ fontFamily: 'Brush Script MT', fontSize: '2rem', fontWeight: 'bold' }} className="cursor-pointer">Lms</h2>
            </div>
          </ScrollLink>
          <div className="md:hidden">
            <button
              className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
      <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        {Nav_Items.map((item, idx) => {
          return (
            <ScrollLink
              key={idx}
              to={item.page}
              className={
                "block lg:inline-block font-semibold text-cyan-700 hover:text-neutral-500 dark:text-neutral-100 relative cursor-pointer"
              }
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              {item.label}
              <span className="absolute left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform ease-in-out duration-500 origin-right hover:scale-x-100"></span>
            </ScrollLink>
          )
        })}
      </div>
    </div>

    <div className="flex space-x-4">
      <Link href="/sign-in" className="bg-blue-100 hover:bg-blue-700 shadow-2xl text-blue font-bold py-2 px-4 rounded flex items-center">
        <Image
          src="/login.svg" 
          alt="Giriş Yap"
          width={20}
          height={20}
        />
        <span className="ml-2">Giriş Yap</span>
      </Link>
      <Link href="/sign-up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ücretsiz Kaydolun
      </Link>
    </div>

    </div>
    </header>
  )
} 
