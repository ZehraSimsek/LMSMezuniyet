"use client"
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function Header({ name, isTeacher }) {
  const history = useHistory();

  const handleSignOut = async () => {
    await auth.signOut(() => {
      history.push('/'); // Çıkış yaptıktan sonra ana sayfaya yönlendir
    });
  };

  const handleTeacherMode = async () => {
    'use server';
    // Öğretmen moduna geçiş işlemleri burada gerçekleştirilir.
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
        {isTeacher && (
          <button onClick={handleTeacherMode} className="flex items-center space-x-2">
            <FaChalkboardTeacher />
            <span>Öğretmen Moduna Geç</span>
          </button>
        )}
        <span>Merhaba, {name}</span>
        <UserButton onSignOut={handleSignOut} />
      </div>
    </nav>
  );
}
