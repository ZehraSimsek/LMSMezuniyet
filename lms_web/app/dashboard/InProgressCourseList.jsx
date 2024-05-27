// // import React from 'react'
// // import ProgressCourseItem from './ProgressCourseItem';

// // function InProgressCourseList({userEnrolledCourses}) {
// //   return (
// //     <div className='p-5 bg-white mt-3 rounded-sm'>
// //         <h2 className='text-purple-500 text-[18px] font-semibold fixedElement'>Son Alınan Kurslar</h2>
// //         <div>
// //             {
// //                 userEnrolledCourses.map((item, index) => {
// //                     return <ProgressCourseItem key={index}
// //                     course={item}
// //                     />
// //                 })
// //             }
// //         </div>
// //     </div>
// //   )
// // }

// // export default InProgressCourseList

// import React from 'react'
// import ProgressCourseItem from './ProgressCourseItem';

// function InProgressCourseList({userEnrolledCourses}) {
//   return (
//     <div className='p-5 bg-white mt-3 rounded-sm'>
//         <h2 className='text-purple-500 text-[18px] font-semibold fixedElement'>Son Alınan Kurslar</h2>
//         <div className='flex flex-wrap justify-start'>
//             {
//                 userEnrolledCourses.map((item, index) => {
//                     return <ProgressCourseItem key={index}
//                     course={item}
//                     />
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default InProgressCourseList

// import React from 'react'
// import ProgressCourseItem from './ProgressCourseItem';

// function InProgressCourseList({userEnrolledCourses}) {
//   return (
//     <div className='p-3 mt-2 rounded-sm'>
//         <div className='font-bold text-custom-color p-2 rounded-md'> 
//             <h2 className="text-[20px] font-bold text-sky-700">Son Alınan Kurslar</h2>
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//             {
//                 userEnrolledCourses.map((item, index) => {
//                     return <ProgressCourseItem key={index}
//                     course={item}
//                     />
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default InProgressCourseList

// import React from 'react';
// import ProgressCourseItem from './ProgressCourseItem';
// import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa'; // İkonlar için

// function CourseList({ userEnrolledCourses }) {
//   const completedCourses = userEnrolledCourses.filter(course => course.isCompleted);
//   const inProgressCourses = userEnrolledCourses.filter(course => !course.isCompleted);

//   return (
//     <div className='p-6 mt-3 rounded-sm'>
//       <div className='flex justify-center mb-5'>
//         <div className='flex items-center justify-center bg-blue-500 text-white rounded-full p-2 mr-2'>
//           <FaHourglassHalf />
//           <span className='ml-2'>({inProgressCourses.length})</span>
//         </div>
//         <div className='flex items-center justify-center bg-green-500 text-white rounded-full p-2 ml-2'>
//           <FaCheckCircle />
//           <span className='ml-2'>({completedCourses.length})</span>
//         </div>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//         {inProgressCourses.map((item, index) => (
//           <ProgressCourseItem key={index} course={item} />
//         ))}
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//         {completedCourses.map((item, index) => (
//           <ProgressCourseItem key={index} course={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CourseList;


import React from 'react';
import ProgressCourseItem from './ProgressCourseItem';

function CourseList({ userEnrolledCourses }) {
  const completedCourses = userEnrolledCourses.filter(course => course.completedChapter.length === course.totalChapters);
  const inProgressCourses = userEnrolledCourses.filter(course => course.completedChapter.length !== course.totalChapters);

  return (
    <div className='p-6 mt-3 rounded-sm'>
      <h2 className="text-[20px] font-bold text-sky-700 mr-2 mt-2">Alınan Kurslar</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {inProgressCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} isCompleted={false} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {completedCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} isCompleted={true} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;

// import React, { useState, useEffect } from 'react';
// import ProgressCourseItem from './ProgressCourseItem';
// import GlobalApi from '../_utils/GlobalApi';

// function CourseList({ userEnrolledCourses }) {
//   const [filter, setFilter] = useState('Tümü');
//   const [activeTag, setActiveTag] = useState('Tümü');
//   const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
//   const [courseList, setCourseList] = useState([]);
//   const [filteredCourseList, setFilteredCourseList] = useState([]);

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     filterCourses();
//   }, [courseList, activeTag, filter]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const tags = [...new Set(courseList.flatMap(course => course.tag))];

//   const filterCourses = () => {
//     let filteredCourses = courseList;
//     if (activeTag !== 'Tümü' && tags.includes(activeTag)) {
//       filteredCourses = filteredCourses.filter(course => course.tag.includes(activeTag));
//     }
//     if (filter !== 'Tümü') {
//       filteredCourses = filteredCourses.filter(course => (filter === 'Ücretsiz' ? course.free : !course.free));
//     }
//     setFilteredCourseList(filteredCourses);
//   };

//   const completedCourses = userEnrolledCourses.filter(course => course.completedChapter.length === course.totalChapters);
//   const inProgressCourses = userEnrolledCourses.filter(course => course.completedChapter.length !== course.totalChapters);

//   return (
//     <div className='p-6 mt-3 rounded-sm'>
//       <div className="flex justify-center m-auto">
//         {['Tümü', 'Ücretsiz', 'Ücretli'].map(option => (
//           <button
//             key={option}
//             onClick={() => setFilter(filter === option ? 'Tümü' : option)}
//             className={`mr-2 p-2 rounded-lg ${filter === option ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//           >
//             {option}
//           </button>
//         ))}
//         <div className="relative inline-block text-left">
//           <div>
//             <button type="button" onClick={() => setTagDropdownOpen(!tagDropdownOpen)} className="inline-flex justify-center w-full rounded-md border text-sky-700 border-blue-500 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
//               {activeTag === 'Tümü' ? 'Filtrele' : activeTag}
//               <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6A1 1 0 0110 17v-4H7a7 7 0 01-7-7 1 1 0 112 0 5 5 0 005 5h3V7a1 1 0 01.293-.707l6-6A1 1 0 0110 3z" clip-rule="evenodd" />
//               </svg>
//             </button>
//           </div>

//           {tagDropdownOpen && (
//             <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//               <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                 {tags.map(tag => (
//                   <button
//                     key={tag}
//                     onClick={() => {
//                       setActiveTag(activeTag === tag ? 'Tümü' : tag);
//                       setTagDropdownOpen(false);
//                     }}
//                     className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${activeTag === tag ? 'bg-blue-500 text-white' : ''}`}
//                     role="menuitem"
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//         {inProgressCourses.map((item, index) => (
//           <ProgressCourseItem key={index} course={item} isCompleted={false} />
//         ))}
//       </div>
//       {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//         {completedCourses.map((item, index) => (
//           <ProgressCourseItem key={index} course={item} isCompleted={true} />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default CourseList;





// import React, { useEffect, useState } from 'react';
// import ProgressCourseItem from './ProgressCourseItem';
// import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';

// function CourseList({ userEnrolledCourses }) {
//   const completedCourses = userEnrolledCourses.filter(course => course.isCompleted);
//   const inProgressCourses = userEnrolledCourses.filter(course => !course.isCompleted);

//   const [showCompleted, setShowCompleted] = useState(false);
//   const [showInProgress, setShowInProgress] = useState(false);

//   const handleCompletedClick = () => {
//     setShowCompleted(true);
//     setShowInProgress(false);
//   }

//   const handleInProgressClick = () => {
//     setShowInProgress(true);
//     setShowCompleted(false);
//   }

//   return (
//     <div className='p-6 mt-3 rounded-sm'>
//       <div className='flex justify-center mb-5'>
//         <div className='flex items-center justify-center bg-blue-500 text-white rounded-full p-2 mr-2' onClick={handleInProgressClick}>
//           <FaHourglassHalf className="animate-pulse cursor-pointer"/>
//           <span className='ml-2 cursor-pointer'>({inProgressCourses.length})</span>
//         </div>
//         <div className='flex items-center justify-center bg-green-500 text-white rounded-full p-2 ml-2' onClick={handleCompletedClick}>
//           <FaCheckCircle className="cursor-pointer animate-pulse"/>
//           <span className='ml-2 cursor-pointer'>({completedCourses.length})</span>
//         </div>
//       </div>
//       {showInProgress && 
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//           {inProgressCourses.map((item, index) => (
//             <ProgressCourseItem key={index} course={item} isCompleted={false} />
//           ))}
//         </div>
//       }
//       {showCompleted && 
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//           {completedCourses.map((item, index) => (
//             <ProgressCourseItem key={index} course={item} isCompleted={true} />
//           ))}
//         </div>
//       }
//     </div>
//   );
// }

// export default CourseList;
