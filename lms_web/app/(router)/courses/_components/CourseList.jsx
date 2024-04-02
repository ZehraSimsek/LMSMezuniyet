// import React, { useEffect, useState } from "react";
// import GlobalApi from "../../../_utils/GlobalApi";
// import CourseItem from "./CourseItem";
// import SideBanners from "./SideBanners";
// import Link from 'next/link';
// import { toast, ToastContainer, } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function CourseList() {
//   const [courseList, setCourseList] = useState([]);
//   const [filteredCourseList, setFilteredCourseList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tags, setTags] = useState([]);
//   const [activeTag, setActiveTag] = useState('Tümü');

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     if (courseList.length > 0) {
//       filterCourses();
//       getTags();
//     }
//   }, [courseList, searchTerm]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getTags = () => {
//     const tags = [...new Set(courseList.flatMap(course => course.tag))];
//     setTags(tags);
//   };

//   const filterCourses = () => {
//     let filteredCourses = courseList;
//     if (activeTag !== 'Tümü') {
//       filteredCourses = filteredCourses.filter(course => course.tag.includes(activeTag));
//     }
//     if (searchTerm !== "") {
//       filteredCourses = filteredCourses.filter(course =>
//         course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.tag.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (filteredCourses.length === 0 && searchTerm !== "") {
//       toast.warn('Arama sonucunda herhangi bir kurs bulunamadı.', {
//         position: "top-center"
//       });
//       filteredCourses = courseList;
//     }
//     setFilteredCourseList(filteredCourses);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="p-5 bg-slate-50 rounded-lg mt-3">
//       <div className="flex items-center rounded-lg justify-between">
//         <h2 className="text-[20px] font-bold text-sky-700">Tüm Kurslar</h2>
//         <div className="mb-2 mr-1">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Kurs ara..."
//             className="w-60 p-2 rounded-full mt-2 text-center"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center mb-5">
//         {tags.map(tag => (
//           <button
//             key={tag}
//             onClick={() => setActiveTag(tag)}
//             className={`mr-2 p-2 rounded-lg ${activeTag === tag ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {filteredCourseList?.length > 0
//             ? filteredCourseList.map((item, index) => (
//               <Link href={'/course-preview/' + item.slug}>
//                 <div key={index}>
//                   <CourseItem course={item} id={item.id} />
//                 </div>
//               </Link>
//             ))
//             : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
//               ></div>
//             ))}
//         </div>
//         <div className="flex flex-col bg-white mt-4 ml-3">
//           <SideBanners />
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default CourseList;


// import React, { useEffect, useState } from "react";
// import GlobalApi from "../../../_utils/GlobalApi";
// import CourseItem from "./CourseItem";
// import SideBanners from "./SideBanners";
// import Link from 'next/link';
// import { toast, ToastContainer, } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function CourseList() {
//   const [courseList, setCourseList] = useState([]);
//   const [filteredCourseList, setFilteredCourseList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tags, setTags] = useState([]);
//   const [activeTag, setActiveTag] = useState('Tümü');
//   const [filter, setFilter] = useState("Tümü");

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     if (courseList.length > 0) {
//       filterCourses();
//       getTags();
//     }
//   }, [courseList, searchTerm, filter]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getTags = () => {
//     const tags = [...new Set(courseList.flatMap(course => course.tag))];
//     setTags(tags);
//   };

//   const filterCourses = () => {
//     let filteredCourses = courseList;
//     if (activeTag !== 'Tümü' && tags.includes(activeTag)) {
//       filteredCourses = filteredCourses.filter(course => course.tag.includes(activeTag));
//     }
//     if (filter !== 'Tümü') {
//       filteredCourses = filteredCourses.filter(course => (filter === 'Ücretsiz' ? course.free : !course.free));
//     }
//     if (searchTerm !== "") {
//       filteredCourses = filteredCourses.filter(course =>
//         course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.tag.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (filteredCourses.length === 0 && searchTerm !== "") {
//       toast.warn('Arama sonucunda herhangi bir kurs bulunamadı.', {
//         position: "top-center"
//       });
//       filteredCourses = courseList;
//     }
//     setFilteredCourseList(filteredCourses);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="p-5 bg-slate-50 rounded-lg mt-2">
//       <div className="flex items-center justify-between mb-5 mt-3">
//         <div className="flex items-center justify-start mb-5">
//           <h2 className="text-[20px] font-bold text-sky-700 mr-4">Tüm Kurslar</h2>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Kurs ara..."
//             className="w-58 p-2 text-center rounded-xl mt-2"
//             style={{
//               border: "2px solid #C0C0C0", 
//               transition: "transform 0.3s ease", 
//             }}
//             onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
//             onMouseLeave={(e) => e.target.style.transform = "scale(1)"} 
//           />
//         </div>
//         <div className="flex justify-center m-auto">
//           {['Tümü', 'Ücretsiz', 'Ücretli'].map(option => (
//             <button
//               key={option}
//               onClick={() => setFilter(filter === option ? 'Tümü' : option)}
//               className={`mr-2 p-2 rounded-lg ${filter === option ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//             >
//               {option}
//             </button>
//           ))}
//           {tags.map(tag => (
//             <button
//               key={tag}
//               onClick={() => setActiveTag(activeTag === tag ? 'Tümü' : tag)}
//               className={`mr-2 p-2 rounded-lg ${activeTag === tag ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-row">
//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
//           {filteredCourseList?.length > 0
//             ? filteredCourseList.map((item, index) => (
//               <Link href={'/course-preview/' + item.slug}>
//                 <div key={index}>
//                   <CourseItem course={item} id={item.id} />
//                 </div>
//               </Link>
//             ))
//             : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
//               ></div>
//             ))}
//         </div>
//         <div className="flex flex-col bg-slate-100 ml-3 mt-0">
//           <SideBanners />
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default CourseList;

import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi";
import CourseItem from "./CourseItem";
import SideBanners from "./SideBanners";
import Link from 'next/link';
import { toast, ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronRight } from 'react-icons/fa';

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [filteredCourseList, setFilteredCourseList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState('Tümü');
  const [filter, setFilter] = useState("Tümü");
  const [showMoreTags, setShowMoreTags] = useState(false);

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    if (courseList.length > 0) {
      filterCourses();
      getTags();
    }
  }, [courseList, searchTerm, filter]);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };

  const getTags = () => {
    const tags = [...new Set(courseList.flatMap(course => course.tag))];
    setTags(tags);
  };

  const filterCourses = () => {
    let filteredCourses = courseList;
    if (activeTag !== 'Tümü' && tags.includes(activeTag)) {
      filteredCourses = filteredCourses.filter(course => course.tag.includes(activeTag));
    }
    if (filter !== 'Tümü') {
      filteredCourses = filteredCourses.filter(course => (filter === 'Ücretsiz' ? course.free : !course.free));
    }
    if (searchTerm !== "") {
      filteredCourses = filteredCourses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tag.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filteredCourses.length === 0 && searchTerm !== "") {
      toast.warn('Arama sonucunda herhangi bir kurs bulunamadı.', {
        position: "top-center"
      });
      filteredCourses = courseList;
    }
    setFilteredCourseList(filteredCourses);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-5 bg-slate-50 rounded-lg mt-2">
      <div className="flex items-center justify-between mb-5 mt-3">
        <div className="flex items-center justify-start mb-5">
          <h2 className="text-[20px] font-bold text-sky-700 mr-4">Tüm Kurslar</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Kurs ara..."
            className="w-58 p-2 text-center rounded-xl mt-2"
            style={{
              border: "2px solid #C0C0C0", 
              transition: "transform 0.3s ease", 
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} 
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"} 
          />
        </div>
        <div className="flex justify-center m-auto">
          {['Tümü', 'Ücretsiz', 'Ücretli'].map(option => (
            <button
              key={option}
              onClick={() => setFilter(filter === option ? 'Tümü' : option)}
              className={`mr-2 p-2 rounded-lg ${filter === option ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            >
              {option}
            </button>
          ))}
          {tags.slice(0, showMoreTags ? tags.length : 5).map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? 'Tümü' : tag)}
              className={`mr-2 p-2 rounded-lg ${activeTag === tag ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            >
              {tag}
            </button>
          ))}
          {tags.length > 5 && 
            <button onClick={() => setShowMoreTags(!showMoreTags)}>
              <FaChevronRight />
            </button>
          }
        </div>
      </div>

      <div className="flex flex-row">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {filteredCourseList?.length > 0
            ? filteredCourseList.map((item, index) => (
              <Link href={'/course-preview/' + item.slug}>
                <div key={index}>
                  <CourseItem course={item} id={item.id} />
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
        <div className="flex flex-col bg-slate-100 ml-3 mt-0">
          <SideBanners />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CourseList;