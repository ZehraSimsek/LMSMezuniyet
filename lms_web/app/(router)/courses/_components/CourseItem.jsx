// import React from 'react'
// import Image from 'next/image'
// import { FaBookOpen, FaBook } from 'react-icons/fa'
// import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import CoursePreview from '../../course-preview/[courseId]/page'; 

// function CourseItem({course , id}) {
//   return (
//     <Router>
//     <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'>
//         <Image src={course?.banner?.url}
//           width={500}
//           height={150}
//           alt='banner'
//           className='rounded-t-xl'
//         />
//         <div className='flex flex-col gap-1 p-2'>
//             <h2 className='font-semibold'>{course.name}</h2>
//             <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
//             <h2 className='text-[15px]'>{course?.free?'Ücretsiz':'Ücretli'}</h2>
//         </div>
//         <div className='p-2 flex justify-between items-center'>
//           {/* <Link to={`/course-preview/${id}`} className="text-blue-500 hover:text-blue-700 flex-grow">
//             Kursu Görüntüle
//           </Link> */}
//             Kursu izle<Route path="/course-preview/:id" component={CoursePreview} />
//           <div>
//             {course?.chapter?.length == 2 ? <FaBookOpen size={24} className='mr-2'/> : <FaBook size={24}/>}
//           </div>
//         </div>

//     </div>
//     </Router>
//   )
// }

// export default CourseItem

// import React from 'react'
// import Image from 'next/image'
// import { FaBookOpen, FaBook } from 'react-icons/fa'
// import { Link } from 'react-router-dom';

// function CourseItem({course , id}) {
//   return (
//     <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'>
//         <Image src={course?.banner?.url}
//           width={500}
//           height={150}
//           alt='banner'
//           className='rounded-t-xl'
//         />
//         <div className='flex flex-col gap-1 p-2'>
//             <h2 className='font-semibold'>{course.name}</h2>
//             <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
//             <h2 className='text-[15px]'>{course?.free?'Ücretsiz':'Ücretli'}</h2>
//         </div>
//         <div className='p-2 flex justify-between items-center'>
//           <Link to={`/course-preview/${id}`} className="text-blue-500 hover:text-blue-700 flex-grow">
//             Kursu Görüntüle
//           </Link>
//           <div>
//             {course?.chapter?.length == 2 ? <FaBookOpen size={24} className='mr-2'/> : <FaBook size={24}/>}
//           </div>
//         </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import { FaBookOpen, FaBook } from 'react-icons/fa'

function CourseItem({course , id}) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'>
        <Image src={course?.banner?.url}
          width={500}
          height={150}
          alt='banner'
          className='rounded-t-xl h-[130px] object-cover'
        />
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-semibold'>{course.name}</h2>
            <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
            <h2 className='text-[15px]'>{course?.free?'Ücretsiz':'Ücretli'}</h2>
        </div>
        <div className='p-2 flex justify-between items-center'>

          <div>
            {course?.chapter?.length == 2 ? <FaBookOpen size={24} className='mr-2'/> : <FaBook size={24}/>}
          </div>
        </div>
    </div>
  )
}

export default CourseItem;

