import React, { useEffect, useState } from 'react';
import { FaHome, FaSearch, FaUserCog, FaChartBar, FaBookOpen, FaBars } from 'react-icons/fa';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Courses from './teacherMode/courses';
import CourseList from '../(router)/courses/_components/CourseList'
import InProgressCourseList from './InProgressCourseList'
import Statistic from './teacherMode/statistic'
import GlobalApi from '../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';

function Sidebar({ isVisible }) { 
  const [showLabels, setShowLabels] = useState(false);
  const {user} = useUser();
  const menuItems = [
    { link: '/myCourses', icon: <FaHome />, label: 'Kurslarım' },
    { link: '/', icon: <FaSearch />, label: 'Ana Sayfa' },
    ...(isVisible ? [{ link: '/statistics', icon: <FaChartBar />, label: 'İstatistik' }, { link: '/courses', icon: <FaBookOpen />, label: 'Dersler' }] : []), 
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
      <div className={`fixed right-0 top-1/4 -translate-y-1/2 bg-custom-side transition-all duration-500 ease-in-out transform translate-x-0 w-42 h-auto p-4 rounded-l-lg shadow-lg ${isVisible ? 'mt-12' : ''}`}>
        <button onClick={() => setShowLabels(!showLabels)} className="absolute top-0 right-0 m-2"><FaBars /></button>
        <nav className="space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className={`flex items-center space-x-2 text-lg p-2 rounded relative ${item.activeClassName ? 'text-white bg-blue-200 hover:bg-blue-800' : ''}`}>
              {item.icon}
              {showLabels && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <Routes>
      <Route path="/myCourses" element={<InProgressCourseList userEnrolledCourses={userEnrolledCourses} />} />
          {/* Kurslarım içeriği */}
        <Route path="/" element={<CourseList />}>
          {/* Arama içeriği */}
        </Route>
        {isVisible && (
          <>
            <Route path="/statistics" element={<Statistic />}>
              {/* İstatistik içeriği */}
            </Route>
            <Route path="/courses" element={<Courses />} />
              {/* Dersler içeriği */}
          </>
        )}
      </Routes>
    </Router>
  )};
  
export default Sidebar;