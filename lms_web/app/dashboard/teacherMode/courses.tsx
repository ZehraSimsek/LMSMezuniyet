// import React, { useState } from 'react';
// import Modal from './Modal'; 
// import { FaPlus } from 'react-icons/fa'

// function courses() {
//   const [modalOpen, setModalOpen] = useState(false); 

//   return (
//     <div style={{ position: 'relative', top: '60px' }} className="flex flex-col md:flex-row">
//       <div className="md:w-1/4 p-4">
//         <button onClick={() => setModalOpen(true)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
//       </div>
//       <div className="md:w-3/4 p-4">
//         <div>lessons</div>
//       </div>
//     </div>
//   )
// }

// export default courses

// import React, { useState } from 'react';
// import { FaPlus, FaPencilAlt } from 'react-icons/fa'

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [courseCategories, setCourseCategories] = useState([]);

//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div style={{ position: 'relative', top: '60px' }} className="flex flex-col md:flex-row justify-center items-center h-screen">
//       <div className="md:w-1/2 p-4">
//         <button onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28 absolute top-0 left-0 m-4 mt-8">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {showForm && (
//           <form className="flex flex-col mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={(e) => setFree(e.target.value)} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={(e) => setFree(e.target.value)} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Eklenen Bölümler:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <textarea className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-24" value={chapterDesc} onChange={(e) => setChapterDesc(e.target.value)} />
//                 <FaPencilAlt />
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Courses

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [tags, setTags] = useState([]);

//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getTags();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getTags = () => {
//     const tags = [...new Set(courseList.flatMap(course => course.tag))];
//     setTags(tags);
//   };

//   return (
//     <div style={{ position: 'relative', top: '60px' }} className="flex flex-col md:flex-row justify-center items-center h-screen">
//       <div className="md:w-1/2 p-4">
//         <button onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28 absolute top-0 left-0 m-4 mt-8">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {showForm && (
//           <form className="flex flex-col mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={(e) => setFree(e.target.value)} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={(e) => setFree(e.target.value)} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-transparent focus:outline-none">
//                   {tags.map((tag, index) => (
//                     <option key={index}>{tag}</option>
//                   ))}
//                 </select>
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Eklenen Bölümler:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <textarea className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-24" value={chapterDesc} onChange={(e) => setChapterDesc(e.target.value)} />
//                 <FaPencilAlt />
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Courses

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);  

//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getTags();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getTags = () => {
//     const tags = [...new Set(courseList.flatMap(course => course.tag))];
//     setTags(tags);
//   };

//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   }

//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   }

//   return (
//     <div style={{ position: 'relative' , top: '80px'  }} className="flex flex-col md:flex-row justify-center items-center">
//       <div>
//         <button onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28 absolute top-0 left-0 m-4 mt-8">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {showForm && (
//           <div className="flex flex-col md:flex-row mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
//             <div className="mb-4 md:w-1/2 md:pr-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={handleFreeChange} checked={free === 'yes'} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={handleFreeChange} checked={free === 'no'} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4 md:w-1/2 md:pl-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-transparent focus:outline-none">
//                   {tags.map((tag, index) => (
//                     <option key={index}>{tag}</option>
//                   ))}
//                 </select>
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Eklenen Bölümler:</label>
//               <button onClick={() => setIsModalOpen(true)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center">
//                 <FaPlusCircle className="mr-1" />
//                 <span>Bölüm Ekle</span>
//               </button>
//               {isModalOpen && (
//                 <div className="fixed z-10 inset-0 overflow-y-auto">
//                   {/* ...modal content... */}
//                 </div>
//               )}
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Courses


// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);  

//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getTags();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getTags = () => {
//     const tags = [...new Set(courseList.flatMap(course => course.tag))];
//     setTags(tags);
//   };

//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   }

//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   }

//   const handleSubmit = () => {
//     const courseData = {
//       name,
//       price,
//       description,
//       totalChapters: parseInt(totalChapters),
//       free: free === "true",
//       authorEmail:user?.primaryEmailAddress?.emailAddress,
//       chapters: [
//         {
//           shortDesc: chapterDesc,
//           chapterNumber: parseInt(chapterNo)
//         }
//       ]
//     };

//     GlobalApi.createCourse(courseData)
//       .then((result) => {
//         alert("Kurs Ekleme Başarılı!");
//         console.log("Kurs eklendi:", result);

//       })
//       .catch((error) => {
//         console.error("Kurs eklenirken bir hata oluştu:", error);
//       });
//   }

//   return (
//     <div style={{ position: 'relative' , top: '80px'  }} className="flex flex-col md:flex-row justify-center items-center">
//       <div>
//         <button onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28 absolute top-0 left-0 m-4 mt-8">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {showForm && (
//           <div className="flex flex-col md:flex-row mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
//             <div className="mb-4 md:w-1/2 md:pr-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={handleFreeChange} checked={free === 'yes'} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={handleFreeChange} checked={free === 'no'} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4 md:w-1/2 md:pl-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-transparent focus:outline-none">
//                   {tags.map((tag, index) => (
//                     <option key={index}>{tag}</option>
//                   ))}
//                 </select>
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Eklenen Bölümler:</label>
//               <button onClick={() => setIsModalOpen(true)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center">
//                 <FaPlusCircle className="mr-1" />
//                 <span>Bölüm Ekle</span>
//               </button>
//               {isModalOpen && (
//                 <div className="fixed z-10 inset-0 overflow-y-auto">
//                   {/* ...modal content... */}
//                 </div>
//               )}
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//             <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Kursu Kaydet
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Courses

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);  

//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getCategories();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getCategories = () => {
//     const categories = [...new Set(courseList.flatMap(course => course.tag))];
//     setCourseCategories(categories.map((category) => ({
//       label: category,
//       value: category,
//     })));
//   };

//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   }

//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   }

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   }

//   const handleSubmit = () => {
//     const courseData = {
//       name,
//       price,
//       description,
//       totalChapters: parseInt(totalChapters),
//       free: free === "yes" ? true : false,
//       authorEmail: user?.primaryEmailAddress?.emailAddress,
//       selectedCategory,
//       chapters: [
//         {
//           shortDesc: chapterDesc,
//           chapterNumber: parseInt(chapterNo)
//         }
//       ]
//     };

//     GlobalApi.createCourse(courseData)
//       .then((result) => {
//         alert("Kurs Ekleme Başarılı!");
//         console.log("Kurs eklendi:", result);

//       })
//       .catch((error) => {
//         console.error("Kurs eklenirken bir hata oluştu:", error);
//       });
//   }

//   return (
//     <div style={{ position: 'relative' , top: '80px'  }} className="flex flex-col md:flex-row justify-center items-center">
//       <div>
//         <button onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28 absolute top-0 left-0 m-4 mt-8">
//           <FaPlus className="mr-1" />
//           <span>Kurs Ekle</span>
//         </button>
//         {showForm && (
//           <div className="flex flex-col md:flex-row mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
//             <div className="mb-4 md:w-1/2 md:pr-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={handleFreeChange} checked={free === 'yes'} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={handleFreeChange} checked={free === 'no'} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4 md:w-1/2 md:pl-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <input type="text" value={selectedCategory} className="border p-2 bg-gray-100 flex justify-between items-center" readOnly />
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kategori Seç:</label>
//               <select onChange={handleCategoryChange} className="border p-2 bg-gray-100 flex justify-between items-center">
//                 {courseCategories.map((category, index) => (
//                   <option key={index} value={category.value}>{category.label}</option>
//                 ))}
//               </select>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//             <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Kursu Kaydet
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Courses

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti'; 

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);  
//   const [confetti, setConfetti] = useState(false);
//   const [filledFields, setFilledFields] = useState(0);
//   const totalFields = 7;
//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     let count = 0;
//     if (name !== "") count++;
//     if (description !== "") count++;
//     if (totalChapters !== "") count++;
//     if (price !== "") count++;
//     if (free !== "false") count++;
//     if (selectedCategory !== null) count++;
//     if (coverPhoto !== null) count++;
//     setFilledFields(count);
//   }, [name, description, totalChapters, price, free, selectedCategory, coverPhoto]);

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getCategories();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getCategories = () => {
//     const categories = [...new Set(courseList.flatMap(course => course.tag))];
//     setCourseCategories(categories.map((category) => ({
//       label: category,
//       value: category,
//     })));
//   };

//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   }

//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   }

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   }

//   const handleSubmit = () => {
//     const courseData = {
//       name,
//       price,
//       description,
//       totalChapters: parseInt(totalChapters),
//       free: free === "yes" ? true : false,
//       authorEmail: user?.primaryEmailAddress?.emailAddress,
//       selectedCategory,
//       chapters: [
//         {
//           shortDesc: chapterDesc,
//           chapterNumber: parseInt(chapterNo)
//         }
//       ]
//     };

//     GlobalApi.createCourse(courseData)
//       .then((result) => {
//         toast.success("Kurs Ekleme Başarılı!");  // Alert yerine Toast mesajı gönderdik
//         setConfetti(true);
//         setTimeout(() => setConfetti(false), 5000);
//         console.log("Kurs eklendi:", result);
//       })
//       .catch((error) => {
//         console.error("Kurs eklenirken bir hata oluştu:", error);
//       });
//   }

//   return (
//     <div className="flex flex-col items-center justify-center pt-20">
//       {confetti && <Confetti />}
//       <button style={{position:'absolute' , top:'80px'}} onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center w-32 absolute top-0 left-0 m-4 mt-8">
//         <FaPlus className="mr-1" />
//         <span>Kurs Ekle</span>
//       </button>
//       <span className="mr-2 ml-2">({filledFields}/{totalFields})</span>
//       {showForm && (
//         <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
//           <div className="mb-4 md:w-1/2 md:pr-4">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={handleFreeChange} checked={free === 'yes'} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={handleFreeChange} checked={free === 'no'} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4 md:w-1/2 md:pl-4 ">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <select onChange={handleCategoryChange} className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 {courseCategories.map((category, index) => (
//                   <option key={index} value={category.value}>{category.label}</option>
//                 ))}
//               </select>
//               <input type="text" value={selectedCategory} className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg mt-2" readOnly />
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//           </div>
//           <button onClick={handleSubmit} style={{ position: 'absolute', bottom: '20px', right: '20px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Kursu Kaydet
//           </button>
//         </div>
//       )}
//     </div>
//   ) 
// }

// export default Courses


// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle , FaTimes } from 'react-icons/fa'
// import GlobalApi from '../../_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti'; 
// import AllCourses from './allCourse';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalChapters, setTotalChapters] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);  
//   const [confetti, setConfetti] = useState(false);
//   const [filledFields, setFilledFields] = useState(0);
//   const totalFields = 7;
//   const [showForm, setShowForm] = useState(false);
//   const {user} = useUser();

//   useEffect(() => {
//     let count = 0;
//     if (name !== "") count++;
//     if (description !== "") count++;
//     if (totalChapters !== "") count++;
//     if (price !== "") count++;
//     if (free !== "false") count++;
//     if (selectedCategory !== null) count++;
//     if (coverPhoto !== null) count++;
//     setFilledFields(count);
//   }, [name, description, totalChapters, price, free, selectedCategory, coverPhoto]);

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getCategories();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };
//   const getCategories = () => {
//     const categories = [...new Set(courseList.flatMap(course => course.tag))];
//     setCourseCategories(categories.map((category) => ({
//       label: category,
//       value: category,
//     })));
//   };
//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   }
//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   }
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   }

//   const handleSubmit = () => {
//     const courseData = {
//       name,
//       price,
//       description,
//       totalChapters: parseInt(totalChapters),
//       free: free === "yes" ? true : false,
//       authorEmail: user?.primaryEmailAddress?.emailAddress,
//       selectedCategory,
//       chapters: [
//         {
//           shortDesc: chapterDesc,
//           chapterNumber: parseInt(chapterNo)
//         }
//       ]
//     };
//     GlobalApi.createCourse(courseData)
//       .then((result) => {
//         toast.success("Kurs Ekleme Başarılı!"); 
//         setConfetti(true);
//         console.log(result);
//         setTimeout(() => setConfetti(false), 5000);
//         console.log("Kurs eklendi:", result);
//         GlobalApi.publishCourse(result.createCourseList.id)
//         .then((publishResult) => {
//           console.log("Kurs yayınlandı:", publishResult);
//         })
//         .catch((publishError) => {
//           console.error("Kurs yayınlanırken bir hata oluştu:", publishError);
//         });
//         setTimeout(() => setShowForm(false), 5000);
//     })
//       .catch((error) => {
//         console.error("Kurs eklenirken bir hata oluştu:", error);
//       });
//   }

//   return (
//     <div className="flex flex-col items-center justify-center pt-20">
//       {!showForm && <AllCourses />}
//       {confetti && <Confetti />}
//       <button style={{position:'absolute' , top:'80px'}} onClick={() => setShowForm(!showForm)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center w-32 absolute top-0 left-0 m-4 mt-8">
//         {showForm ? <FaTimes className="mr-1" /> : <FaPlus className="mr-1" />}
//         <span>{showForm ? "Vazgeç" : "Kurs Ekle"}</span>
//       </button>     
//       {showForm && (
//         <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
//           <span className="mr-2 ml-2" style={{position:'absolute' , top:'120px', left:'150px'}}>({filledFields}/{totalFields})</span>
//           <div className="mb-4 md:w-1/2 md:pr-4">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent w-full focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent w-full focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent w-full focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" value="yes" onChange={handleFreeChange} checked={free === 'yes'} className="form-radio text-indigo-600" />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input type="radio" value="no" onChange={handleFreeChange} checked={free === 'no'} className="form-radio text-pink-600" />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4 md:w-1/2 md:pl-4 ">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi Seçin:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <select onChange={handleCategoryChange} className="bg-transparent w-full focus:outline-none">
//                   {courseCategories.map((category, index) => (
//                     <option key={index} value={category.value}>{category.label}</option>
//                   ))}
//                 </select>
//                 <FaPencilAlt />
//               </div>
//               <input type="text" value={selectedCategory} placeholder='Mevcut kategorilerden seçebilirsiniz.' className="border p-2 bg-gray-100 w-full flex justify-between items-center rounded-lg mt-2" readOnly />
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent w-full focus:outline-none" />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">  
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//           </div>
//           <button onClick={handleSubmit} style={{ position: 'absolute', bottom: '20px', right: '20px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Kursu Kaydet
//             </button>
//          </div>
//       )}
//       <ToastContainer/>
//     </div>
//   ) 
// }

// export default Courses

// bu tamam asset ekleme
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle, FaTimes } from 'react-icons/fa';
// import { useUser } from '@clerk/nextjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti';
// import AllCourses from './allCourse';
// import GlobalApi from '../../_utils/GlobalApi';
// import fetch from 'node-fetch';
// import FormData from 'form-data';
// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [videoUri, setVideoUri] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [confetti, setConfetti] = useState(false);
//   const [filledFields, setFilledFields] = useState(0);
//   const [tag , setTag] = useState("");
//   const totalFields = 10;
//   const [showForm, setShowForm] = useState(false);
//   const { user } = useUser();
//   const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYxMjcwNTgsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNTg3OGUxZDMtNWJjMy00YzZkLTgwMzMtZDgyMWI2MmI5ZDhkIiwianRpIjoiY2x3ZGxxcGF2ajRobTA4anQ0MDZpYWxobSJ9.f1tncbqNT1xDpQgxtYhOlUAY3liLKUoaYAGVc6xxT7Su-0a6bmB3uKGULbPCcHKxocva8HfGtDnMczGpC1LZvoIQy9FrVftHHI5RublU2ZSOWpHnLGPxN9_QfC6reSSSWBgCCdIiq2sUblunM8DtGDmkTIpo75fYpoizeZGXNywXrg3tGk4vJVoBbSVBePM8Qx7fVF2rc7bYOCyGufgpnVo5-Rv_ZDtj-_0TTk2br4Vf6fKH92oBrKKBOUQOjU2IVyux7FOQQANCDaSmnVyqsbx6-zc1y5izKkC545hg9zMuoqhpTgfVwfJJekEGzDpXBSt4rqUACFVsbz_Xr0utvroQrEJQ97GMk8m-twOxSCeO00PJlDDupT3USDN7pADX5XCs_vLy0_9AMFxmv3ID4XvGggtp2d-a-TeQKtkT-DRg8x4O-ZaaT4w7L7Bg_Y9nh-ibVpFk9gtg5C9mtIt9bFHzgKFrblO24f-Tk-8MB2P1FLrnaJy9EMnU8WCcIDdQh8-notWa5AE4Xj6hcWxCUX269WOLVlp2i2_s4bXg1ClsopdYJ6LgeKzHkmIT2U1ZJcoDAa_WOd6o4_B8K_UqH8p64XiaOlR-LefJDmPbD59b26q2laqpf4BUsjBEbcH8s-TnFHRNqTWOOJq-c5i6ziGNAN6EprV53kX99S-r6iU';
//   const HYGRAPH_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";
//   const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

//   useEffect(() => {
//     let count = 0;
//     if (name !== "") count++;
//     if (description !== "") count++;
//     if (price !== "") count++;
//     if (free !== "false") count++;
//     if (tag !== null) count++;
//     if (coverPhoto !== null) count++;
//     if (chapterName !== "") count++;
//     if (chapterDesc !== "") count++;
//     if (chapterNo !== "") count++;
//     if (videoUri !== null) count++;
//     setFilledFields(count);
//   }, [name, description, price, free, tag, coverPhoto, chapterName, chapterDesc, chapterNo, videoUri]);

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getCategories();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getCategories = () => {
//     const categories = [...new Set(courseList.flatMap(course => course.tags))];
//     setCourseCategories(categories.map((category) => ({
//       label: category,
//       value: category,
//     })));
//   };


//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   };

//   const handleChapterVideo = (event) => {
//     setVideoUri(event.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (filledFields < totalFields) {
//       const missingFields = [];
//       if (name === "") missingFields.push("Kurs Adı");
//       if (description === "") missingFields.push("Açıklama");
//       if (price === "") missingFields.push("Kurs Fiyatı");
//       if (free === "false") missingFields.push("Ücretli mi?");
//       if (tag === null) missingFields.push("Kurs Kategorisi");
//       if (coverPhoto === null) missingFields.push("Kapak Fotoğrafı");
//       if (chapterName === "") missingFields.push("Bölüm Adı");
//       if (chapterDesc === "") missingFields.push("Bölüm Açıklaması");
//       if (chapterNo === "") missingFields.push("Bölüm Numarası");
//       if (videoUri === null) missingFields.push("Bölüm Videosu");

//       toast.error(`Lütfen tüm alanları doldurunuz: ${missingFields.join(", ")}`);
//       return;
//     }
//     try {
//       let coverPhotoId = null;
//       if (coverPhoto) {
//         const coverForm = new FormData();
//         coverForm.append('fileUpload', coverPhoto);

//         const coverUploadResponse = await fetch(`${HYGRAPH_URL}/upload`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
//           },
//           body: coverForm,
//         });
//         if (!coverUploadResponse.ok) {
//           throw new Error(`Cover photo upload failed with status ${coverUploadResponse.status}`);
//         }

//         const coverResponseData = await coverUploadResponse.json();
//         coverPhotoId = coverResponseData.id;

//         const publishCoverAssetResult = await GlobalApi.publishAsset(coverPhotoId);
//         console.log("Cover asset yayınlandı:", publishCoverAssetResult);
//       }
//       let coverVideoId = null;
//       if (videoUri) {
//         const form = new FormData();
//         form.append('fileUpload', videoUri);

//         const uploadResponse = await fetch(`${MASTER}/upload`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
//           },
//           body: form,
//         });
//         if (!uploadResponse.ok) {
//           throw new Error(`Chapter video upload failed with status ${uploadResponse.status}`);
//         }

//         const responseData = await uploadResponse.json();
//         coverVideoId = responseData.id;

//         const publishVideoAssetResult = await GlobalApi.publishAsset(coverVideoId);
//         console.log("Chapter video asset yayınlandı:", publishVideoAssetResult);
//       }

//       const courseData = {
//         name,
//         price,
//         description,
//         free: free === "yes" ? true : false,
//         authorEmail: user?.primaryEmailAddress?.emailAddress,
//         tag,
//         coverPhoto: coverPhotoId,
//         chapterName,
//         chapterDesc,
//         chapterNum: parseFloat(chapterNo),
//         videoUri: coverVideoId,
//       };

//       const result = await GlobalApi.createCourse(courseData);
//       toast.success("Kurs Ekleme Başarılı!");
//       setConfetti(true);
//       console.log(result);

//       const publishResult = await GlobalApi.publishCourse(result.createCourseList.id);
//       console.log("Kurs yayınlandı:", publishResult);

//       setTimeout(() => setConfetti(false), 5000);
//       setTimeout(() => setShowForm(false), 5000);
//     } catch (error) {
//       console.error("Kurs eklenirken bir hata oluştu:", error);
//     }
//   };


//   return (
//     <div className="flex flex-col items-center justify-center pt-20">
//       {!showForm && <AllCourses />}
//       {confetti && <Confetti />}
//       <button
//         style={{ position: 'absolute', top: '80px' }}
//         onClick={() => setShowForm(!showForm)}
//         className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center w-32 absolute top-0 left-0 m-4 mt-8"
//       >
//         {showForm ? <FaTimes className="mr-1" /> : <FaPlus className="mr-1" />}
//         <span>{showForm ? "Vazgeç" : "Kurs Ekle"}</span>
//       </button>
//       {showForm && (
//         <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 w-full">
//           <span className="mr-2 ml-2" style={{ position: 'absolute', top: '120px', left: '150px' }}>
//             ({filledFields}/{totalFields})
//           </span>
//           <div className="mb-4 md:w-1/2 md:pr-4">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="bg-transparent w-full focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="bg-transparent w-full focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//               <div className="mt-2">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     value="yes"
//                     onChange={handleFreeChange}
//                     checked={free === 'yes'}
//                     className="form-radio text-indigo-600"
//                   />
//                   <span className="ml-2">Evet</span>
//                 </label>
//                 <label className="inline-flex items-center ml-6">
//                   <input
//                     type="radio"
//                     value="no"
//                     onChange={handleFreeChange}
//                     checked={free === 'no'}
//                     className="form-radio text-pink-600"
//                   />
//                   <span className="ml-2">Hayır</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="text"
//                   value={tag}
//                   onChange={(e) => setTag(e.target.value)}
//                   className="bg-transparent w-full focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//           <div className="mb-4 md:w-1/2 md:pl-4">
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="number"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   className="bg-transparent w-full focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//               <input type="file" onChange={handleCoverPhoto} />
//             </div>
//           </div>
//         </div>
//       )}
// {showForm && (
//   <div className="w-full mt-4 px-8">
//     <h2 className="text-[20px] font-bold text-sky-700 mr-4">Bölüm Ayrıntıları</h2>
//     <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg mt-2">
//       <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Numarası:</label>
//       <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//         <input
//           type="number"
//           value={chapterNo}
//           onChange={(e) => setChapterNo(e.target.value)}
//           className="bg-transparent w-4/5 focus:outline-none"
//         />
//         <FaPencilAlt />
//       </div>
//     </div>
//     <div className="card min-w-60 mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//       <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Adı:</label>
//       <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//         <input
//           type="text"
//           value={chapterName}
//           onChange={(e) => setChapterName(e.target.value)}
//           className="bg-transparent w-4/5 focus:outline-none"
//         />
//         <FaPencilAlt />
//       </div>
//     </div>
//     <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//       <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Açıklaması:</label>
//       <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//         <input
//           type="text"
//           value={chapterDesc}
//           onChange={(e) => setChapterDesc(e.target.value)}
//           className="bg-transparent w-4/5 focus:outline-none"
//         />
//         <FaPencilAlt />
//       </div>
//     </div>
//     <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//       <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Videosu:</label>
//       <input type="file" onChange={handleChapterVideo} />
//     </div>
//     <div className="flex justify-end">
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Kursu Kaydet
//       </button>
//     </div>
//   </div>
// )}
//       <ToastContainer />
//     </div>
//   );

// }

// export default Courses;

// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaPencilAlt, FaPlusCircle, FaTimes } from 'react-icons/fa';
// import { useUser } from '@clerk/nextjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti';
// import AllCourses from './allCourse';
// import GlobalApi from '../../_utils/GlobalApi';
// import fetch from 'node-fetch';
// import FormData from 'form-data';
// import CreatableSelect from 'react-select/creatable';

// function Courses() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [free, setFree] = useState("false");
//   const [chapterName, setChapterName] = useState("");
//   const [chapterDesc, setChapterDesc] = useState("");
//   const [chapterNo, setChapterNo] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [coverPhoto, setCoverPhoto] = useState(null);
//   const [videoUri, setVideoUri] = useState(null);
//   const [courseList, setCourseList] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [confetti, setConfetti] = useState(false);
//   const [filledFields, setFilledFields] = useState(0);
//   const [tag, setTag] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const totalFields = 10;
//   const [showForm, setShowForm] = useState(false);
//   const { user } = useUser();
//   const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYxMjcwNTgsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNTg3OGUxZDMtNWJjMy00YzZkLTgwMzMtZDgyMWI2MmI5ZDhkIiwianRpIjoiY2x3ZGxxcGF2ajRobTA4anQ0MDZpYWxobSJ9.f1tncbqNT1xDpQgxtYhOlUAY3liLKUoaYAGVc6xxT7Su-0a6bmB3uKGULbPCcHKxocva8HfGtDnMczGpC1LZvoIQy9FrVftHHI5RublU2ZSOWpHnLGPxN9_QfC6reSSSWBgCCdIiq2sUblunM8DtGDmkTIpo75fYpoizeZGXNywXrg3tGk4vJVoBbSVBePM8Qx7fVF2rc7bYOCyGufgpnVo5-Rv_ZDtj-_0TTk2br4Vf6fKH92oBrKKBOUQOjU2IVyux7FOQQANCDaSmnVyqsbx6-zc1y5izKkC545hg9zMuoqhpTgfVwfJJekEGzDpXBSt4rqUACFVsbz_Xr0utvroQrEJQ97GMk8m-twOxSCeO00PJlDDupT3USDN7pADX5XCs_vLy0_9AMFxmv3ID4XvGggtp2d-a-TeQKtkT-DRg8x4O-ZaaT4w7L7Bg_Y9nh-ibVpFk9gtg5C9mtIt9bFHzgKFrblO24f-Tk-8MB2P1FLrnaJy9EMnU8WCcIDdQh8-notWa5AE4Xj6hcWxCUX269WOLVlp2i2_s4bXg1ClsopdYJ6LgeKzHkmIT2U1ZJcoDAa_WOd6o4_B8K_UqH8p64XiaOlR-LefJDmPbD59b26q2laqpf4BUsjBEbcH8s-TnFHRNqTWOOJq-c5i6ziGNAN6EprV53kX99S-r6iU';
//   const HYGRAPH_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";
//   const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

//   useEffect(() => {
//     let count = 0;
//     if (name !== "") count++;
//     if (description !== "") count++;
//     if (price !== "") count++;
//     if (free !== "false") count++;
//     if (tag !== "") count++;
//     if (coverPhoto !== null) count++;
//     if (chapterName !== "") count++;
//     if (chapterDesc !== "") count++;
//     if (chapterNo !== "") count++;
//     if (videoUri !== null) count++;
//     setFilledFields(count);
//   }, [name, description, price, free, tag, coverPhoto, chapterName, chapterDesc, chapterNo, videoUri]);

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   useEffect(() => {
//     getCategories();
//   }, [courseList]);

//   const getAllCourses = () => {
//     GlobalApi.getAllCourseList().then((resp) => {
//       setCourseList(resp?.courseLists);
//     });
//   };

//   const getCategories = () => {
//     const categories = [...new Set(courseList.flatMap(course => course.tags))];
//     setCourseCategories(categories.map((category) => ({
//       label: category,
//       value: category,
//     })));
//   };

//   const handleFreeChange = (event) => {
//     setFree(event.target.value);
//     if (event.target.value === 'no') {
//       setPrice("0");
//     } else {
//       setPrice("");
//     }
//   };

//   const handleCategoryChange = (selectedOption, actionMeta) => {
//     if (actionMeta.action === 'create-option') {
//       // Eğer kullanıcı yeni bir etiket oluşturduysa
//       const newTag = actionMeta.name; // Yeni etiketi al
//       const newOption = { label: newTag, value: newTag }; // Yeni etiket için bir seçenek oluştur
//       setCourseCategories(prevCategories => [...prevCategories, newOption]); // Yeni etiketi kategorilere ekle
//       setSelectedCategory(newOption); // Seçili kategoriyi yeni etiket olarak ayarla
//       setTag(newTag); // Etiket state'ini güncelle
//     } else {
//       setSelectedCategory(selectedOption); // Diğer durumlarda seçili kategoriyi ayarla
//       setTag(selectedOption ? selectedOption.value : ""); // Etiket state'ini güncelle
//     }
//   };



//   const handleCoverPhoto = (event) => {
//     setCoverPhoto(event.target.files[0]);
//   };

//   const handleChapterVideo = (event) => {
//     setVideoUri(event.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (filledFields < totalFields) {
//       const missingFields = [];
//       if (name === "") missingFields.push("Kurs Adı");
//       if (description === "") missingFields.push("Açıklama");
//       if (price === "") missingFields.push("Kurs Fiyatı");
//       if (free === "false") missingFields.push("Ücretli mi?");
//       if (tag === "") missingFields.push("Kurs Kategorisi");
//       if (coverPhoto === null) missingFields.push("Kapak Fotoğrafı");
//       if (chapterName === "") missingFields.push("Bölüm Adı");
//       if (chapterDesc === "") missingFields.push("Bölüm Açıklaması");
//       if (chapterNo === "") missingFields.push("Bölüm Numarası");
//       if (videoUri === null) missingFields.push("Bölüm Videosu");

//       toast.error(`Lütfen tüm alanları doldurunuz: ${missingFields.join(", ")}`);
//       return;
//     }
//     try {
//       let coverPhotoId = null;
//       if (coverPhoto) {
//         const coverForm = new FormData();
//         coverForm.append('fileUpload', coverPhoto);

//         const coverUploadResponse = await fetch(`${HYGRAPH_URL}/upload`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
//           },
//           body: coverForm,
//         });
//         if (!coverUploadResponse.ok) {
//           throw new Error(`Cover photo upload failed with status ${coverUploadResponse.status}`);
//         }

//         const coverResponseData = await coverUploadResponse.json();
//         coverPhotoId = coverResponseData.id;

//         const publishCoverAssetResult = await GlobalApi.publishAsset(coverPhotoId);
//         console.log("Cover asset yayınlandı:", publishCoverAssetResult);
//       }
//       let coverVideoId = null;
//       if (videoUri) {
//         const form = new FormData();
//         form.append('fileUpload', videoUri);

//         const uploadResponse = await fetch(`${MASTER}/upload`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
//           },
//           body: form,
//         });
//         if (!uploadResponse.ok) {
//           throw new Error(`Chapter video upload failed with status ${uploadResponse.status}`);
//         }

//         const responseData = await uploadResponse.json();
//         coverVideoId = responseData.id;

//         const publishVideoAssetResult = await GlobalApi.publishAsset(coverVideoId);
//         console.log("Chapter video asset yayınlandı:", publishVideoAssetResult);
//       }

//       const courseData = {
//         name,
//         price,
//         description,
//         free: free === "yes" ? true : false,
//         authorEmail: user?.primaryEmailAddress?.emailAddress,
//         tag,
//         coverPhoto: coverPhotoId,
//         chapterName,
//         chapterDesc,
//         chapterNum: parseFloat(chapterNo),
//         videoUri: coverVideoId,
//       };

//       const result = await GlobalApi.createCourse(courseData);
//       toast.success("Kurs Ekleme Başarılı!");
//       setConfetti(true);
//       console.log(result);

//       const publishResult = await GlobalApi.publishCourse(result.createCourseList.id);
//       console.log("Kurs yayınlandı:", publishResult);

//       setTimeout(() => setConfetti(false), 5000);
//       setTimeout(() => setShowForm(false), 5000);
//     } catch (error) {
//       console.error("Kurs eklenirken bir hata oluştu:", error);
//     }
//   };

//   return (
//   <div className="flex flex-col items-center justify-center pt-20">
//     {!showForm && <AllCourses />}
//     {confetti && <Confetti />}
//     <button
//       style={{ position: 'absolute', top: '80px' }}
//       onClick={() => setShowForm(!showForm)}
//       className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center w-32 absolute top-0 left-0 m-4 mt-8"
//     >
//       {showForm ? <FaTimes className="mr-1" /> : <FaPlus className="mr-1" />}
//       <span>{showForm ? "Vazgeç" : "Kurs Ekle"}</span>
//     </button>
//     {showForm && (
//       <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 w-full">
//         <span className="mr-2 ml-2" style={{ position: 'absolute', top: '120px', left: '150px' }}>
//           ({filledFields}/{totalFields})
//         </span>
//         <div className="mb-4 md:w-1/2 md:pr-4">
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
//             <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="bg-transparent w-full focus:outline-none"
//               />
//               <FaPencilAlt />
//             </div>
//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
//             <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//               <input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="bg-transparent w-full focus:outline-none"
//               />
//               <FaPencilAlt />
//             </div>
//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
//             <div className="mt-2">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="yes"
//                   onChange={handleFreeChange}
//                   checked={free === 'yes'}
//                   className="form-radio text-indigo-600"
//                 />
//                 <span className="ml-2">Evet</span>
//               </label>
//               <label className="inline-flex items-center ml-6">
//                 <input
//                   type="radio"
//                   value="no"
//                   onChange={handleFreeChange}
//                   checked={free === 'no'}
//                   className="form-radio text-pink-600"
//                 />
//                 <span className="ml-2">Hayır</span>
//               </label>
//             </div>
//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
//             <CreatableSelect
//   options={courseCategories}
//   value={selectedCategory}
//   onChange={handleCategoryChange}
//   onInputChange={(input) => setInputValue(input)} // Kullanıcının girdiği değeri sakla
//   inputValue={inputValue} // Kullanıcının girdiği değeri set et
// />

//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
//             <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//               <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="bg-transparent w-full focus:outline-none"
//               />
//               <FaPencilAlt />
//             </div>
//           </div>
//           <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
//             <input type="file" onChange={handleCoverPhoto} />
//           </div>
//         </div>
//         <div className="mb-4 md:w-1/2 md:pl-4">
//           <div className="w-full mt-4 px-8">
//             <h2 className="text-[20px] font-bold text-sky-700 mr-4">Bölüm Ayrıntıları</h2>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg mt-2">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Numarası:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="number"
//                   value={chapterNo}
//                   onChange={(e) => setChapterNo(e.target.value)}
//                   className="bg-transparent w-4/5 focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card min-w-60 mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Adı:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="text"
//                   value={chapterName}
//                   onChange={(e) => setChapterName(e.target.value)}
//                   className="bg-transparent w-4/5 focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Açıklaması:</label>
//               <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                 <input
//                   type="text"
//                   value={chapterDesc}
//                   onChange={(e) => setChapterDesc(e.target.value)}
//                   className="bg-transparent w-4/5 focus:outline-none"
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Videosu:</label>
//               <input type="file" onChange={handleChapterVideo} />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Kursu Kaydet
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default Courses;

import React, { useState, useEffect } from 'react';
import { FaPlus, FaPencilAlt, FaTimes } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import AllCourses from './allCourse';
import GlobalApi from '../../_utils/GlobalApi';
import fetch from 'node-fetch';
import FormData from 'form-data';

function Courses() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [free, setFree] = useState("false");
  const [chapterName, setChapterName] = useState("");
  const [chapterDesc, setChapterDesc] = useState("");
  const [chapterNo, setChapterNo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseCategories, setCourseCategories] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [videoUri, setVideoUri] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [filledFields, setFilledFields] = useState(0);
  const [tag, setTag] = useState("");
  const totalFields = 10;
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();
  const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYxMjcwNTgsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNTg3OGUxZDMtNWJjMy00YzZkLTgwMzMtZDgyMWI2MmI5ZDhkIiwianRpIjoiY2x3ZGxxcGF2ajRobTA4anQ0MDZpYWxobSJ9.f1tncbqNT1xDpQgxtYhOlUAY3liLKUoaYAGVc6xxT7Su-0a6bmB3uKGULbPCcHKxocva8HfGtDnMczGpC1LZvoIQy9FrVftHHI5RublU2ZSOWpHnLGPxN9_QfC6reSSSWBgCCdIiq2sUblunM8DtGDmkTIpo75fYpoizeZGXNywXrg3tGk4vJVoBbSVBePM8Qx7fVF2rc7bYOCyGufgpnVo5-Rv_ZDtj-_0TTk2br4Vf6fKH92oBrKKBOUQOjU2IVyux7FOQQANCDaSmnVyqsbx6-zc1y5izKkC545hg9zMuoqhpTgfVwfJJekEGzDpXBSt4rqUACFVsbz_Xr0utvroQrEJQ97GMk8m-twOxSCeO00PJlDDupT3USDN7pADX5XCs_vLy0_9AMFxmv3ID4XvGggtp2d-a-TeQKtkT-DRg8x4O-ZaaT4w7L7Bg_Y9nh-ibVpFk9gtg5C9mtIt9bFHzgKFrblO24f-Tk-8MB2P1FLrnaJy9EMnU8WCcIDdQh8-notWa5AE4Xj6hcWxCUX269WOLVlp2i2_s4bXg1ClsopdYJ6LgeKzHkmIT2U1ZJcoDAa_WOd6o4_B8K_UqH8p64XiaOlR-LefJDmPbD59b26q2laqpf4BUsjBEbcH8s-TnFHRNqTWOOJq-c5i6ziGNAN6EprV53kX99S-r6iU';
  const HYGRAPH_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";
  const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

  useEffect(() => {
    let count = 0;
    if (name !== "") count++;
    if (description !== "") count++;
    if (price !== "") count++;
    if (free !== "false") count++;
    if (tag !== "") count++;
    if (coverPhoto !== null) count++;
    if (chapterName !== "") count++;
    if (chapterDesc !== "") count++;
    if (chapterNo !== "") count++;
    if (videoUri !== null) count++;
    setFilledFields(count);
  }, [name, description, price, free, tag, coverPhoto, chapterName, chapterDesc, chapterNo, videoUri]);

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    getCategories();
  }, [courseList]);

  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };

  const getCategories = () => {
    const categoryCounts = {};
    let maxEnrollCategory = '';
    let maxEnrollCount = 0;

    courseList.forEach(course => {
      const categories = typeof course.tags === 'string' ? course.tags.split(',') : course.tags;

      categories.forEach(category => {
        if (!categoryCounts[category]) {
          categoryCounts[category] = course.counterEnroll;
        } else {
          categoryCounts[category] += course.counterEnroll;
        }

        if (categoryCounts[category] > maxEnrollCount) {
          maxEnrollCount = categoryCounts[category];
          maxEnrollCategory = category;
        }
      });
    });

    const categories = Object.keys(categoryCounts).map(category => ({
      label: category,
      value: category,
      isMostEnrolled: category === maxEnrollCategory,
    })).sort((a, b) => categoryCounts[b.value] - categoryCounts[a.value]); // Enroll sayısına göre sırala

    setCourseCategories(categories);
  };

  const handleFreeChange = (event) => {
    setFree(event.target.value);
    if (event.target.value === 'no') {
      setPrice("0");
    } else {
      setPrice("");
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setTag(event.target.value);
  };

  const handleCoverPhoto = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  const handleChapterVideo = (event) => {
    setVideoUri(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (filledFields < totalFields) {
      const missingFields = [];
      if (name === "") missingFields.push("Kurs Adı");
      if (description === "") missingFields.push("Açıklama");
      if (price === "") missingFields.push("Kurs Fiyatı");
      if (free === "false") missingFields.push("Ücretli mi?");
      if (tag === "") missingFields.push("Kurs Kategorisi");
      if (coverPhoto === null) missingFields.push("Kapak Fotoğrafı");
      if (chapterName === "") missingFields.push("Bölüm Adı");
      if (chapterDesc === "") missingFields.push("Bölüm Açıklaması");
      if (chapterNo === "") missingFields.push("Bölüm Numarası");
      if (videoUri === null) missingFields.push("Bölüm Videosu");

      toast.error(`Lütfen tüm alanları doldurunuz: ${missingFields.join(", ")}`);
      return;
    }
    try {
      let coverPhotoId = null;
      if (coverPhoto) {
        const coverForm = new FormData();
        coverForm.append('fileUpload', coverPhoto);

        const coverUploadResponse = await fetch(`${HYGRAPH_URL}/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
          },
          body: coverForm,
        });
        if (!coverUploadResponse.ok) {
          throw new Error(`Cover photo upload failed with status ${coverUploadResponse.status}`);
        }

        const coverResponseData = await coverUploadResponse.json();
        coverPhotoId = coverResponseData.id;

        const publishCoverAssetResult = await GlobalApi.publishAsset(coverPhotoId);
        console.log("Cover asset yayınlandı:", publishCoverAssetResult);
      }
      let coverVideoId = null;
      if (videoUri) {
        const form = new FormData();
        form.append('fileUpload', videoUri);

        const uploadResponse = await fetch(`${MASTER}/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
          },
          body: form,
        });
        if (!uploadResponse.ok) {
          throw new Error(`Chapter video upload failed with status ${uploadResponse.status}`);
        }

        const responseData = await uploadResponse.json();
        coverVideoId = responseData.id;

        const publishVideoAssetResult = await GlobalApi.publishAsset(coverVideoId);
        console.log("Chapter video asset yayınlandı:", publishVideoAssetResult);
      }

      const courseData = {
        name,
        price,
        description,
        free: free === "yes" ? true : false,
        authorEmail: user?.primaryEmailAddress?.emailAddress,
        tag,
        coverPhoto: coverPhotoId,
        chapterName,
        chapterDesc,
        chapterNum: parseFloat(chapterNo),
        videoUri: coverVideoId,
      };

      const result = await GlobalApi.createCourse(courseData);
      toast.success("Kurs Ekleme Başarılı!");
      setConfetti(true);
      console.log(result);

      const publishResult = await GlobalApi.publishCourse(result.createCourseList.id);
      console.log("Kurs yayınlandı:", publishResult);

      setTimeout(() => setConfetti(false), 5000);
      setTimeout(() => setShowForm(false), 5000);
    } catch (error) {
      console.error("Kurs eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      {!showForm && <AllCourses />}
      {confetti && <Confetti />}
      <button
        style={{ position: 'absolute', top: '80px' }}
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded flex items-center w-32 absolute top-0 left-0 m-4 mt-8"
      >
        {showForm ? <FaTimes className="mr-1" /> : <FaPlus className="mr-1" />}
        <span>{showForm ? "Vazgeç" : "Kurs Ekle"}</span>
      </button>
      {showForm && (
        <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 w-full">
          <span className="mr-2 ml-2" style={{ position: 'absolute', top: '120px', left: '150px' }}>
            ({filledFields}/{totalFields})
          </span>
          <div className="mb-4 md:w-1/2 md:pr-4">
            <h2 className="text-[20px] font-bold text-sky-700 mr-4">Kurs Ayrıntıları</h2>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
              <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent w-full focus:outline-none"
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
              <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-transparent w-full focus:outline-none"
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    onChange={handleFreeChange}
                    checked={free === 'yes'}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Evet</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    value="no"
                    onChange={handleFreeChange}
                    checked={free === 'no'}
                    className="form-radio text-pink-600"
                  />
                  <span className="ml-2">Hayır</span>
                </label>
              </div>
            </div>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi:</label>
              <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="bg-transparent w-full focus:outline-none"
                  placeholder="Etiket giriniz veya kategoriden seçiniz"
                />
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="bg-transparent w-full focus:outline-none"
                >
                  <option value="" disabled>Seçiniz</option>
                  {courseCategories.map((category) => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
                <FaPencilAlt />
              </div>
            </div>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
              <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-transparent w-full focus:outline-none"
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
              <input type="file" onChange={handleCoverPhoto} />
            </div>
          </div>
          <div className="mb-4 md:w-1/2 md:pl-4">
            <div className="w-full mt-4 px-8">
              <h2 className="text-[20px] font-bold text-sky-700 mr-4">Bölüm Ayrıntıları</h2>
              <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Numarası:</label>
                <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                  <input
                    type="number"
                    value={chapterNo}
                    onChange={(e) => setChapterNo(e.target.value)}
                    className="bg-transparent w-4/5 focus:outline-none"
                  />
                  <FaPencilAlt />
                </div>
              </div>
              <div className="card min-w-60 mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Adı:</label>
                <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                  <input
                    type="text"
                    value={chapterName}
                    onChange={(e) => setChapterName(e.target.value)}
                    className="bg-transparent w-4/5 focus:outline-none"
                  />
                  <FaPencilAlt />
                </div>
              </div>
              <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Açıklaması:</label>
                <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
                  <input
                    type="text"
                    value={chapterDesc}
                    onChange={(e) => setChapterDesc(e.target.value)}
                    className="bg-transparent w-4/5 focus:outline-none"
                  />
                  <FaPencilAlt />
                </div>
              </div>
              <div className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Videosu:</label>
                <input type="file" onChange={handleChapterVideo} />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Kursu Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Courses;

