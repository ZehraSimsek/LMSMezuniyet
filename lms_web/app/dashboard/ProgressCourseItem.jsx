import React from 'react'
import Image from 'next/image'

function ProgressCourseItem({course}) {
  return (
    <div className='border-2 border-purple-500 rounded-xl hover:shadow-lg cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200 m-2 w-64'> 
        <Image src={course.courseList?.banner?.url}
          width={500}
          height={150}
          alt='banner'
          className='rounded-t-xl'
        />
        <div className='flex flex-col gap-1 p-4'>
            <h2 className='text-2xl font-semibold text-purple-500'>{course.courseList?.name}</h2>
            <h2 className='text-sm text-gray-400'>{course.courseList?.author}</h2>
        </div>
    </div>
  )
}

export default ProgressCourseItem

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
