"use client"
import React, { createContext, useState , useEffect} from "react";

// export const UserRoleContext = createContext();

// export const UserRoleProvider = ({ children }) => {
//   const [userRole, setUserRole] = useState(null);

//   return (
//     <UserRoleContext.Provider value={{ userRole, setUserRole }}>
//       {children}
//     </UserRoleContext.Provider>
//   );
// };

export const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);
  
    useEffect(() => {
      localStorage.setItem('userRole', userRole);
    }, [userRole]);
  
    return (
      <UserRoleContext.Provider value={{ userRole, setUserRole }}>
        {children}
      </UserRoleContext.Provider>
    );
  };
  
