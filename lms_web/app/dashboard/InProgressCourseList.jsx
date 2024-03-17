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

import React from 'react';
import ProgressCourseItem from './ProgressCourseItem';
import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa'; // İkonlar için

function CourseList({ userEnrolledCourses }) {
  const completedCourses = userEnrolledCourses.filter(course => course.isCompleted);
  const inProgressCourses = userEnrolledCourses.filter(course => !course.isCompleted);

  return (
    <div className='p-6 mt-3 rounded-sm'>
      <div className='flex justify-center mb-5'>
        <div className='flex items-center justify-center bg-blue-500 text-white rounded-full p-2 mr-2'>
          <FaHourglassHalf />
          <span className='ml-2'>({inProgressCourses.length})</span>
        </div>
        <div className='flex items-center justify-center bg-green-500 text-white rounded-full p-2 ml-2'>
          <FaCheckCircle />
          <span className='ml-2'>({completedCourses.length})</span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {inProgressCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {completedCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;


