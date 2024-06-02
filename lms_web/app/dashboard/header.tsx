import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { UserButton } from "@clerk/nextjs"; 
import { FaChalkboardTeacher } from 'react-icons/fa';
import { UserRoleContext } from '../context/UserRoleContext'; 

export default function Header({ name }) {
  const userRole = useContext(UserRoleContext); 

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
