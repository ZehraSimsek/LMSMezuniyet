// import { useState, useEffect } from 'react';
// import { useUser, useSignIn } from "@clerk/clerk-react";
// import Link from 'next/link';

// const ProfileEditForm = () => {
//   const { user } = useUser();
//   const { openForgotPassword } = useSignIn();
//   const [formState, setFormState] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profilePicture: null,
//   });
//   const [isResettingPassword, setIsResettingPassword] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setFormState({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.primaryEmailAddress.emailAddress,
//         profilePicture: user.profilePicture,
//       });
//     }
//   }, [user]);

//   const handleInputChange = (event) => {
//     setFormState({
//       ...formState,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFileChange = (event) => {
//     setFormState({
//       ...formState,
//       profilePicture: event.target.files[0],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await user.update({
//       firstName: formState.firstName,
//       lastName: formState.lastName,
//       profilePicture: formState.profilePicture,
//     });
//   };

//   const handlePasswordReset = (event) => {
//     event.preventDefault();
//     openForgotPassword();
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           İsim:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="firstName"
//             value={formState.firstName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Soyisim:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             name="lastName"
//             value={formState.lastName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Email:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="email"
//             name="email"
//             value={formState.email}
//             onChange={handleInputChange}
//             disabled
//           />
//         </label>
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Profil Fotoğrafı:
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             name="profilePicture"
//             onChange={handleFileChange}
//           />
//         </label>
//         <button onClick={handlePasswordReset} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//           Şifreyi Değiştir
//         </button>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//           Kaydet
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfileEditForm;
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const ProfileEditForm = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0]?.emailAddress);

  useEffect(() => {
    if (!user) {
      return;
    }
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  // Update Clerk user data
  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName,
        lastName: lastName,
      });
      alert("Bilgileriniz Güncellendi.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '40px', backgroundColor: 'white' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#1F41BB', fontWeight: 'bold' }}>Profili Düzenle</h1>
      <label style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Ad</label>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ marginVertical: '4px', height: '50px', borderRadius: '4px', padding: '10px', backgroundColor: '#F1F4FF', color: 'gray' }}
      />
      <label style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Soyad</label>
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginVertical: '4px', height: '50px', borderRadius: '4px', padding: '10px', backgroundColor: '#F1F4FF', color: 'gray' }}
      />
      <label style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>E Mail</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginVertical: '4px', height: '50px', borderRadius: '4px', padding: '10px', backgroundColor: '#F1F4FF', color: 'gray' }}
      />
      <button onClick={onSaveUser} style={{ backgroundColor: '#1F41BB', padding: '10px', borderRadius: '5px' }}>
        <p style={{ color: 'white', textAlign: 'center', fontSize: '1rem' }}>Güncelle</p>
      </button>
    </div>
  );
};

export default ProfileEditForm;


