// import React from 'react'
// import Image from 'next/image'

// function ProgressCourseItem({course}) {

//   const getTotalCompletedChapterPerc = (item) => {
//     const perc = (item.completedChapter?.length/item?.courseList?.chapter?.length)*100
//     return perc
//   }

//   return (
//     <div className='ml-5 mr-8 border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'> 
//         <Image src={course.courseList?.banner?.url}
//           width={500}
//           height={150}
//           alt='banner'
//           className='rounded-t-xl'
//         />
//         <div className='grid grid-cols-1 md:grid-cols-1 gap-1 p-4 mt-1'>
//             <h2 className='text-2xl font-semibold text-purple-500'>{course.courseList?.name}</h2>
//             <h2 className='text-sm text-gray-400'>{course.courseList?.author}</h2>
//             <h2 className='text-[12px] text-gray-400 mt-3'>
//                 {getTotalCompletedChapterPerc(course)}%100
//               <span className='float-right'>
//                 {course.completedChapter?.length} / {course?.courseList?.chapter?.length}*100  
//               </span>
//             </h2>
//         </div>
//     </div>
//   )
// }

// export default ProgressCourseItem

import React from 'react';
import Image from 'next/image';
import ProgressBar from 'react-progressbar'; 
import Link from 'next/link';

function ProgressCourseItem({course}) {

  const getTotalCompletedChapterPerc = (item) => {
    let perc = (item.completedChapter?.length / item?.courseList?.chapter?.length) * 100;
    perc = Math.min(perc, 100); 
    return perc || 0; 
  }

  return (
    <Link href={"/course-preview/" + course?.courseList?.slug}>
      <div className='ml-5 mr-8 border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'> 
          <Image src={course.courseList?.banner?.url}
            width={500}
            height={150}
            alt='banner'
            className='rounded-t-xl'
          />
          <div className='grid grid-cols-1 md:grid-cols-1 gap-1 p-4 mt-1'>
              <h2 className='text-2xl font-semibold text-purple-500'>{course.courseList?.name}</h2>
              <h2 className='text-sm text-gray-400'>{course.courseList?.author}</h2>
              <ProgressBar completed={getTotalCompletedChapterPerc(course)} className="rounded-xl border-l-8 border-teal-700" /> 
              <h2 className='text-[12px] text-gray-400 mt-3'>
                  %{getTotalCompletedChapterPerc(course)}
                <span className='float-right'>
                  {Math.min(course.completedChapter?.length, course?.courseList?.chapter?.length)} / {course?.courseList?.chapter?.length}  
                </span>
              </h2>
          </div>
      </div>
    </Link>
  )
}

export default ProgressCourseItem;



// import React from 'react'
// import Image from 'next/image'

// function ProgressCourseItem({course}) {
//   return (
//     <div className='border-2 border-purple-500 rounded-xl hover:shadow-lg cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200 m-2 w-72'> 
//         <Image src={course.courseList?.banner?.url}
//           width={300}
//           height={150}
//           alt='banner'
//           className='rounded-t-xl'
//         />
//         <div className='flex flex-col gap-1 p-4'>
//             <h2 className='text-2xl font-semibold text-purple-500'>{course.courseList?.name}</h2>
//             <h2 className='text-sm text-gray-400'>{course.courseList?.author}</h2>
//         </div>
//     </div>
//   )
// }

// export default ProgressCourseItem
