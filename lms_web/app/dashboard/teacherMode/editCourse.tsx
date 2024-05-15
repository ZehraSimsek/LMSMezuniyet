import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import GlobalApi from '../../_utils/GlobalApi';
import Confetti from 'react-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllCourses from './allCourse';

function EditCourse({ courseId }) {
  const [course, setCourse] = useState(null);
  const [courseList  , setCourseList] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [totalChapters, setTotalChapters] = useState("");
  const [price, setPrice] = useState("");
  const [free, setFree] = useState("false");
  const [confetti, setConfetti] = useState(false);
  const [filledFields, setFilledFields] = useState(0);
  const [update, setUpdate] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const totalFields = 7;

  useEffect(() => {
    let count = 0;
    if (name !== "") count++;
    if (description !== "") count++;
    if (totalChapters !== "") count++;
    if (price !== "") count++;
    if (free !== "false") count++;
    if (selectedCategory !== null) count++;
    if (coverPhoto !== null) count++;
    setFilledFields(count);
  }, [name, description, totalChapters, price, free, selectedCategory, coverPhoto]);

  useEffect(() => {
    GlobalApi.getAllCourseList().then((result) => {
      console.log(result);
      const specificCourse = result.courseLists.filter(course => course.id === courseId)[0];
      setCourse(specificCourse);
      setName(specificCourse.name);
      setDescription(specificCourse.description);
      setTotalChapters(specificCourse.totalChapters);
      setPrice(specificCourse.price);
      setFree(specificCourse.free ? "yes" : "no");
      setSelectedCategory(specificCourse.tag);
    });
  }, [courseId]);

  const handleCoverPhoto = (event) => {
    setCoverPhoto(event.target.files[0]);
  }

  useEffect(() => {
    const getCategories = () => {
      GlobalApi.getAllCourseList().then((resp) => {
        setCourseList(resp?.courseLists);
      });
      if (course) {
        const categories = [...new Set(courseList.flatMap(course => course.tag))];
        console.log("zej" , categories);
        setCourseCategories(categories.map((category) => ({
          label: category,
          value: category,
        })));
      }
    };
    getCategories();
  }, [course, courseId, trigger]);
  

  const handleUpdate = () => {
    const courseData = {
      courseId: courseId,
      name: name,
      price: price,
      description: description,
      totalChapters: parseInt(totalChapters),
      free: free === "yes" ? true : false,
      selectedCategory: selectedCategory,
    };
    GlobalApi.updateCourse(courseData)
      .then((result) => {
        toast.success("Kurs Başarıyla Güncellendi!"); 
        setConfetti(true);
        console.log(result);
        setTimeout(() => setConfetti(false)
        , 5000);
        console.log("Kurs güncellendi:", result);
        GlobalApi.publishCourse(result.updateCourseList.id)
        .then((publishResult) => {
          console.log("Kurs yayınlandı:", publishResult);
        })
        .catch((publishError) => {
          console.error("Kurs yayınlanırken bir hata oluştu:", publishError);
        });
        setTimeout(() => setUpdate(true)
        , 5000);
      })
      .catch((error) => {
        console.error("Kurs güncellenirken bir hata oluştu:", error);
      });
      setTrigger(trigger + 1);
  };
  
  if (!course) {
    return <div>Loading...</div>;
  }

  if (update) {
    return <AllCourses />;
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
        {confetti && <Confetti />}
      <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
      <span className="mr-2 ml-2" style={{position:'absolute' , top:'120px', left:'150px'}}>({filledFields}/{totalFields})</span>
        <div className="mb-4 md:w-1/2 md:pr-4">
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Adı:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent w-full focus:outline-none" />
              <FaPencilAlt />
            </div>
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <input type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-transparent w-full focus:outline-none" />
              <FaPencilAlt />
            </div>
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Toplam Bölüm Sayısı:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <input type="number" value={totalChapters} onChange={(e) => setTotalChapters(e.target.value)} className="bg-transparent w-full focus:outline-none" />
              <FaPencilAlt />
            </div>
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Ücretli mi?</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" value="yes" onChange={(e) => setFree(e.target.value)} checked={free === 'yes'} className="form-radio text-indigo-600" />
                <span className="ml-2">Evet</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" value="no" onChange={(e) => setFree(e.target.value)} checked={free === 'no'} className="form-radio text-pink-600" />
                <span className="ml-2">Hayır</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4 md:w-1/2 md:pl-4 ">
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Kategorisi Seçin:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <select onChange={handleCategoryChange} className="bg-transparent w-full focus:outline-none">
                {courseCategories.map((category, index) => (
                  <option key={index} value={category.value}>{category.label}</option>
                ))}
              </select>
              <FaPencilAlt />
            </div>
            <input type="text" value={selectedCategory} placeholder='Mevcut kategorilerden seçebilirsiniz.' className="border p-2 bg-gray-100 w-full flex justify-between items-center rounded-lg mt-2" readOnly />
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent w-full focus:outline-none" />
              <FaPencilAlt />
            </div>
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">  
            <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
            <input type="file" onChange={handleCoverPhoto} />
          </div>
        </div>
        <button onClick={handleUpdate} style={{ position: 'absolute', bottom: '20px', right: '20px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Kursu Güncelle
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditCourse;
