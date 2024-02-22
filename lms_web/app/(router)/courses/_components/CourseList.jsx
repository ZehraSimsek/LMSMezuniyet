// "use client"
// import React, { useEffect } from 'react'
// import GlobalApi from '../../../_utils/GlobalApi'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import CourseItem from './CourseItem'

// function CourseList() {
//     const [courseList , setCourseList] = useState([]);
//     useEffect(()=> {
//         getAllCourses();
//     },[]);
//     const getAllCourses = () => {
//         GlobalApi.getAllCourseList().then(resp => {
//             setCourseList(resp?.courseLists);
//         })
//     }

//   return (
//     <div className='p-5 bg-slate-50 rounded-lg mt-3'>
//       <div className='flex items-center rounded-lg justify-between'>
//         <h2 className='text-[20px] font-bold text-sky-700'>Tüm Kurslar</h2>
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filtre" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="light">Tümü</SelectItem>
//             <SelectItem value="dark">Ücretli</SelectItem>
//             <SelectItem value="system">Ücretsiz</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
//         {
//           courseList.map((item, index) => (
//             <div key={index}>
//                 <CourseItem course={item}/>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default CourseList

import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi";
import CourseItem from "./CourseItem";
import SideBanners from "./SideBanners";
import Link from 'next/link';


function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [filter, setFilter] = useState("Tümü");

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="p-5 bg-slate-50 rounded-lg mt-3">
      <div className="flex items-center rounded-lg justify-between">
        <h2 className="text-[20px] font-bold text-sky-700">Tüm Kurslar</h2>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="w-[180px]"
        >
          <option value="Tümü">Tümü</option>
          <option value="Ücretli">Ücretli</option>
          <option value="Ücretsiz">Ücretsiz</option>
        </select>
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {courseList?.length > 0
            ? courseList.map((item, index) => (
              <Link href = {'/course-preview/' + item.slug}>
                <div key={index}>
                  <CourseItem course={item} id={item.id}/>
                </div>
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
        <div className="flex flex-col bg-white mt-4 ml-3">
          <SideBanners />
        </div>
      </div>
    </div>
  );
}

export default CourseList;
