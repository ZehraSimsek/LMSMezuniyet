"use client"
import React, { useState, useEffect } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Sidebar from './sidebar';
import { FaChalkboardTeacher, FaSignOutAlt } from 'react-icons/fa'; 
import PacmanLoader from "react-spinners/PacmanLoader";
import SideBanners from "../(router)/courses/_components/SideBanners";

export default function DashboardPage() {
  const {user } = useUser();
  const [isTeacher, setIsTeacher] = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false); 
  const [isUserLoading, setIsUserLoading] = useState(true); 

  useEffect(() => {
    if (user) {
      setIsTeacher(user.emailAddresses[0].emailAddress.endsWith('.edu'));
      setIsUserLoading(false); 
    }
  }, [user]);

  const handleTeacherMode = () => {
    setIsTeacherMode(true); 
  };

  const handleExitTeacherMode = () => {
    setIsTeacherMode(false); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUserLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  const Spinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PacmanLoader color="#309aca" size={75} />
    </div>
  );

  if (isUserLoading || !user) {
    return <Spinner />;
  }
  
  const name = user.firstName && user.lastName ? `${user.firstName}` : user.emailAddresses[0].emailAddress.split('@')[0];

  return (
    <div className='mt-10 text-start max-w-full mx-auto p-5 rounded-2xl h-screen bg-slate-50'>
      <Sidebar isVisible={isTeacherMode} /> 
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
          <span style={{ fontFamily: 'Times New Roman', fontSize: '20px', fontWeight: 'italic' }}>Merhaba, {name}!</span>
          <div>
            {isTeacher && !isTeacherMode && (
              <button onClick={handleTeacherMode} className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-3 rounded-full">
                <FaChalkboardTeacher />
              </button>
            )}
            {isTeacherMode && (
              <button onClick={handleExitTeacherMode} className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-3 rounded-full">
                <FaSignOutAlt /> 
              </button>
            )}
          </div>
          <UserButton afterSignOutUrl='/' />
        </div>
      </nav>
    </div>
  );
}
