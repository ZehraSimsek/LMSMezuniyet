"use client"
import React, { createContext, useState, useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

export const UserRoleContext = createContext();

export default function Page() {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  useEffect(() => {
    if (userRole) {
      localStorage.setItem('userRole', userRole);
    }
  }, [userRole]);

  const handleRoleChange = (role) => {
    if (role) {
      setUserRole(role);
      localStorage.setItem('userRole', role);
      window.location.reload();
    }
  };

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://t4.ftcdn.net/jpg/04/60/23/37/360_F_460233735_3q7EPRIRdlLIQZYK2ucez8QY8PC53bWA.jpg"
              width={800}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white text-center sm:text-3xl md:text-4xl">
                <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px" />Online öğrenme dünyasına hoş geldiniz!
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Kaydol, sen de online öğrenme dünyasına bir bilet al.
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl text-center">
              <h2 className="mt-6 text-2xl font-bold text-gray-900 text-center sm:text-3xl md:text-4xl">
                Hesabınıza Giriş Yapın
              </h2>

              <p className="mt-4 leading-relaxed text-gray-600">
                Hesabınıza giriş yapmak için ilgili girişi seçiniz.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleRoleChange('Öğretmen')}
                  type="button"
                  className={`font-bold py-2 px-4 rounded m-2 ${userRole === 'Öğretmen' ? 'bg-blue-700' : userRole === 'Öğrenci' ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                >
                  Öğretmen Girişi
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange('Öğrenci')}
                  className={`font-bold py-2 px-4 rounded m-2 ${userRole === 'Öğrenci' ? 'bg-blue-700' : userRole === 'Öğretmen' ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                >
                  Öğrenci Girişi
                </button>
              </div>

              <div className="mt-8">
                <SignIn />
              </div>
            </div>
          </main>
        </div>
      </section>
    </UserRoleContext.Provider>
  );
}






