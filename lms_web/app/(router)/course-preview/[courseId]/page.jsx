// "use client"
// import React, { useEffect } from 'react'
// import VideoDesc from './_components/VideoDesc';
// import {usePathname} from 'next/router'

// function CoursePreview({params}) {
//     const path = usePathname();

//     useEffect(() =>{
//         console.log(params);
//     },[]);
    
//   return (
//     <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
//         <div className='col-span-2 bg-white p-36 '>
//             <VideoDesc />
//         </div>
//     </div>
//   )
// }

// export default CoursePreview
"use client"
import React, { useEffect, useState } from 'react'
import VideoDesc from './_components/VideoDesc';
import CourseEnroll from './_components/CourseEnroll'
import GlobalApi from '../../../_utils/GlobalApi';
import CourseContent from './_components/CourseContent';

function CoursePreview({params}) {
    const [courseInfo , setCourseInfo] = useState();

    useEffect(() =>{
      params&&getCourseInfoById();
    },[params]);
    
    const getCourseInfoById = () => {
        GlobalApi.getCourseById(params?.courseId)
        .then(resp => {
          setCourseInfo(resp?.courseList);
        })
    }

  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        <div className='col-span-2 bg-white p-36 '>
            <VideoDesc courseInfo={courseInfo}/>
        </div>

        <div>
            <CourseEnroll />

            <CourseContent courseInfo={courseInfo}/>
        </div>
    </div>
  )
}

export default CoursePreview
