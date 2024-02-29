// "use client"
// // import React, { useState } from 'react';
// // import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import { FaHome, FaSearch, FaUserCog, FaChevronRight, FaChevronLeft, FaChartBar, FaBookOpen } from 'react-icons/fa';

// // function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isTeacherMode, setIsTeacherMode] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const toggleTeacherMode = () => {
// //     setIsTeacherMode(!isTeacherMode);
// //   };

// //   const menuItems = [
// //     { to: '/home', icon: <FaHome />, label: 'Anasayfa' },
// //     { to: '/search', icon: <FaSearch />, label: 'Arama' },
// //     { to: '/settings', icon: <FaUserCog />, label: 'Profil Ayarları' },
// //     ...(isTeacherMode ? [{ to: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { to: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : []),
// //   ];

// //   return (
// //     <Router>
// //       <button onClick={toggleSidebar} className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
// //         {isOpen ? <FaChevronRight className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''}`} /> : <FaChevronLeft className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''} bounce-left`} />}
// //       </button>
// //       <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-42 h-auto p-4 rounded-l-lg shadow-lg`}>
// //         {isOpen && <button onClick={toggleSidebar} className="absolute top-1/2 left-0 transform -translate-x-full"><FaChevronRight /></button>}
// //         <nav className="space-y-4">
// //           {menuItems.map((item, index) => (
// //             <Link key={index} to={item.to} className={`flex items-center space-x-2 text-lg text-gray-700`}>
// //               {item.icon}
// //               <span>{item.label}</span>
// //             </Link>
// //           ))}
// //         </nav>
// //         {isTeacherMode && <button onClick={toggleTeacherMode}>Öğretmen Modunu Kapat</button>}
// //       </div>
// //       <Routes>
// //         <Route path="/home">
// //           {/* Anasayfa içeriği */}
// //         </Route>
// //         <Route path="/search">
// //           {/* Arama içeriği */}
// //         </Route>
// //         <Route path="/settings">
// //           {/* Profil Ayarları içeriği */}
// //         </Route>
// //         {isTeacherMode && (
// //           <>
// //             <Route path="/statistics">
// //               {/* İstatistik içeriği */}
// //             </Route>
// //             <Route path="/courses">
// //               {/* Dersler içeriği */}
// //             </Route>
// //           </>
// //         )}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default Sidebar;

// import React, { useState } from 'react';
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { FaHome, FaSearch, FaUserCog, FaChevronRight, FaChevronLeft, FaChartBar, FaBookOpen } from 'react-icons/fa';
// import Courses from './teacherMode/Courses';

// function Sidebar({ isVisible }) { 
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     ...(isVisible ? [{ to: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { to: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : [{ to: '/home', icon: <FaHome />, label: 'Anasayfa' }, { to: '/search', icon: <FaSearch />, label: 'Arama' }, { to: '/settings', icon: <FaUserCog />, label: 'Profil Ayarları' }]), 
//   ];

//   return (
//     <Router>
//       <button onClick={toggleSidebar} className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
//         {isOpen ? <FaChevronRight className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''}`} /> : <FaChevronLeft className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''} bounce-left`} />}
//       </button>
//       <div className={`fixed right-0 top-1/2 -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-42 h-auto p-4 rounded-l-lg shadow-lg`}>
//         {isOpen && <button onClick={toggleSidebar} className="absolute top-1/2 left-0 transform -translate-x-full"><FaChevronRight /></button>}
//         <nav className="space-y-4">
//           {menuItems.map((item, index) => (
//             <Link key={index} to={item.to} className={`flex items-center space-x-2 text-lg text-gray-700`}>
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/home">
//           {/* Anasayfa içeriği */}
//         </Route>
//         <Route path="/search">
//           {/* Arama içeriği */}
//         </Route>
//         <Route path="/settings">
//           {/* Profil Ayarları içeriği */}
//         </Route>
//         {isVisible && (
//           <>
//             <Route path="/statistics">
//               {/* İstatistik içeriği */}
//             </Route>
//             <Route path="/courses" element={<Courses />} />
//               {/* Dersler içeriği */}

//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default Sidebar;

// import React, { useState } from 'react';
// import { FaHome, FaSearch, FaUserCog, FaChevronRight, FaChevronLeft, FaChartBar, FaBookOpen } from 'react-icons/fa';
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Courses from './teacherMode/courses';

// function Sidebar({ isVisible }) { 
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState(0);

//   const menuItems = [
//     ...(isVisible ? [{ to: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { to: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : [{ to: '/home', icon: <FaHome />, label: 'Anasayfa' }, { to: '/search', icon: <FaSearch />, label: 'Arama' }, { to: '/settings', icon: <FaUserCog />, label: 'Profil Ayarları' }]), 
//   ];

//   return (
//     <Router>
//       <button onClick={() => setIsOpen(!isOpen)} className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
//         {isOpen ? <FaChevronRight className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''}`} /> : <FaChevronLeft className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''} bounce-left`} />}
//       </button>
//       <div className={`fixed right-0 top-1/2 -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-42 h-auto p-4 rounded-l-lg shadow-lg`}>
//         {isOpen && <button onClick={() => setIsOpen(!isOpen)} className="absolute top-1/2 left-0 transform -translate-x-full"><FaChevronRight /></button>}
//         <nav className="space-y-4">
//           {menuItems.map((item, index) => (
//             <Link key={index} to={item.to} onClick={() => setActive(index)} className={`flex items-center space-x-2 text-lg ${index === active ? 'text-white bg-blue-200 hover:bg-blue-800' : 'text-gray-700'} p-2 rounded relative`}>
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/home">
//           {/* Anasayfa içeriği */}
//         </Route>
//         <Route path="/search">
//           {/* Arama içeriği */}
//         </Route>
//         <Route path="/settings">
//           {/* Profil Ayarları içeriği */}
//         </Route>
//         {isVisible && (
//           <>
//             <Route path="/statistics">
//               {/* İstatistik içeriği */}
//             </Route>
//             <Route path="/courses" element={<Courses />} />
//               {/* Dersler içeriği */}
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default Sidebar;

// import React, { useState,useEffect } from 'react';
// import { FaHome, FaSearch, FaUserCog, FaChevronRight, FaChevronLeft, FaChartBar, FaBookOpen } from 'react-icons/fa';
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Courses from './teacherMode/courses';


// function Sidebar({ isVisible }) { 
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState(0);

//   const menuItems = [
//     ...(isVisible ? [{ link: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { link: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : [{ link: '/', icon: <FaHome />, label: 'Anasayfa' }, { link: '/search', icon: <FaSearch />, label: 'Arama' }, { link: '/settings', icon: <FaUserCog />, label: 'Profil Ayarları' }]), 
//   ];

//   return (
//     <Router>
//       <button onClick={() => setIsOpen(!isOpen)} className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
//         {isOpen ? <FaChevronRight className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''}`} /> : <FaChevronLeft className={`transition-transform duration-500 animate-pulse ${isOpen ? 'rotate-180' : ''} bounce-left`} />}
//       </button>
//       <div className={`fixed right-0 top-1/2 -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-42 h-auto p-4 rounded-l-lg shadow-lg`}>
//         {isOpen && <button onClick={() => setIsOpen(!isOpen)} className="absolute top-1/2 left-0 transform -translate-x-full"><FaChevronRight /></button>}
//         <nav className="space-y-4">
//           {menuItems.map((item, index) => (
//             <Link key={index} to={item.link} className={`flex items-center space-x-2 text-lg p-2 rounded relative`} activeClassName="text-white bg-blue-200 hover:bg-blue-800">
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/">
//           {/* Anasayfa içeriği */}
//         </Route>
//         <Route path="/search">
//           {/* Arama içeriği */}
//         </Route>
//         <Route path="/settings">
//           {/* Profil Ayarları içeriği */}
//         </Route>
//         {isVisible && (
//           <>
//             <Route path="/statistics">
//               {/* İstatistik içeriği */}
//             </Route>
//             <Route path="/courses" element={<Courses />} />
//               {/* Dersler içeriği */}
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import { FaHome, FaSearch, FaUserCog, FaChartBar, FaBookOpen, FaBars } from 'react-icons/fa';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Courses from './teacherMode/courses';
import CourseList from '../(router)/courses/_components/CourseList'
import InProgressCourseList from './InProgressCourseList'
import GlobalApi from '../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';

function Sidebar({ isVisible }) { 
  const [showLabels, setShowLabels] = useState(false);
  const {user} = useUser();
  const menuItems = [
    ...(isVisible ? [{ link: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { link: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : [{ link: '/', icon: <FaHome />, label: 'Anasayfa' }, { link: '/search', icon: <FaSearch />, label: 'Arama' }, { link: '/settings', icon: <FaUserCog />, label: 'Profil Ayarları' }]), 
  ];
  const [userEnrolledCourses , setUserEnrolledCourses] = useState([]);


  useEffect(() =>{
    user&&getAllUserEnrolledCourses();
  },[user]);

  const getAllUserEnrolledCourses = () => {
    GlobalApi.getUserAllEnrolledCourseList(user?.primaryEmailAddress?.emailAddress)
    .then(resp => {
      console.log(resp);
      setUserEnrolledCourses(resp.userEnrollCourses);
    })
  }

  return (
    <Router>
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform translate-x-0 w-42 h-auto p-4 rounded-l-lg shadow-lg`}>
        <button onClick={() => setShowLabels(!showLabels)} className="absolute top-0 right-0 m-2"><FaBars /></button>
        <nav className="space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className={`flex items-center space-x-2 text-lg p-2 rounded relative`} activeClassName="text-white bg-blue-200 hover:bg-blue-800">
              {item.icon}
              {showLabels && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <Routes>
      <Route path="/" element={<InProgressCourseList userEnrolledCourses={userEnrolledCourses} />} />
          {/* Anasayfa içeriği */}
        <Route path="/search" element={<CourseList />}>
          {/* Arama içeriği */}
        </Route>
        <Route path="/settings">
          {/* Profil Ayarları içeriği */}
        </Route>
        {isVisible && (
          <>
            <Route path="/statistics">
              {/* İstatistik içeriği */}
            </Route>
            <Route path="/courses" element={<Courses />} />
              {/* Dersler içeriği */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default Sidebar;

