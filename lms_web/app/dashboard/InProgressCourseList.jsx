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

import React from 'react'
import ProgressCourseItem from './ProgressCourseItem';

function InProgressCourseList({userEnrolledCourses}) {
  return (
    <div className='p-3 mt-2 rounded-sm'>
        <div className='font-bold text-custom-color p-2 rounded-md'> 
            <h2 className="text-[20px] font-bold text-sky-700">Son Alınan Kurslar</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                userEnrolledCourses.map((item, index) => {
                    return <ProgressCourseItem key={index}
                    course={item}
                    />
                })
            }
        </div>
    </div>
  )
}

export default InProgressCourseList
