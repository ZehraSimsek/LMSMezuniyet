import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import GlobalApi from '../../_utils/GlobalApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllCourses from './allCourse';

function EditCourse({ courseId }) {
  const [course, setCourse] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [totalChapters, setTotalChapters] = useState("");
  const [price, setPrice] = useState("");
  const [free, setFree] = useState("false");
  const [filledFields, setFilledFields] = useState(0);
  const [update, setUpdate] = useState(false);
  const [photo, setPhoto] = useState();
  const [coverPhotoUrl, setCoverPhotoUrl] = useState();
  const [tag, setTag] = useState("");
  const totalFields = 7;
const HYGRAPH_ASSET_TOKEN = Your master key;
const MASTER = Your master key;

  useEffect(() => {
    let count = 0;
    if (name !== "") count++;
    if (description !== "") count++;
    if (totalChapters !== "") count++;
    if (price !== "") count++;
    if (free !== "false") count++;
    if (tag !== null) count++;
    if (coverPhotoUrl !== null) count++;
    setFilledFields(count);
  }, [name, description, totalChapters, price, free, tag, coverPhotoUrl]);

  useEffect(() => {
    GlobalApi.getAllCourseList().then((result) => {
      console.log(result);
      const specificCourse = result.courseLists.filter(course => course.id === courseId)[0];
      setCourse(specificCourse);
      setName(specificCourse.name);
      setDescription(specificCourse.description);
      setTotalChapters(specificCourse.totalChapters);
      setPrice(specificCourse.price);
      setFree(specificCourse.price !== 0 ? "yes" : "no");
      setTag(specificCourse.tags);
      setCoverPhotoUrl(specificCourse.banner.url);
      setPhoto(specificCourse.banner);
    });
  }, [courseId]);

  const handleCoverPhoto = (event) => {
    if (event.target.files[0]) {
      setCoverPhotoUrl(event.target.files[0]);
    } else {
      setCoverPhotoUrl(coverPhotoUrl);
    }
  }

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
    })).sort((a, b) => categoryCounts[b.value] - categoryCounts[a.value]);

    setCourseCategories(categories);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value) {
      setTag(event.target.value);
    }
  };
  
  const handleUpdate = async () => {
    let coverPhotoId = null;

    if (coverPhotoUrl) {
      const form = new FormData();
      form.append('fileUpload', coverPhotoUrl);

      const uploadResponse = await fetch(`${HYGRAPH_URL}/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
        },
        body: form,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload hatası ${uploadResponse.status}`);
      }

      const responseData = await uploadResponse.json();
      coverPhotoId = responseData.id;
      console.log(responseData.id);

      const publishAssetResult = await GlobalApi.publishAsset(coverPhotoId);
      console.log("Asset yayınlandı:", publishAssetResult);
    }
    else {
      coverPhotoId = coverPhotoUrl;
    }

    const courseData = {
      courseId: courseId,
      name: name,
      price: price,
      description: description,
      totalChapters: parseInt(totalChapters),
      free: free === "yes" ? true : false,
      tag: tag,
      coverPhoto: coverPhotoId,
    };

    GlobalApi.updateCourse(courseData)
      .then((result) => {
        toast.success("Kurs Başarıyla Güncellendi!");
        console.log(result);
        console.log("Kurs güncellendi:", result);
        GlobalApi.publishCourse(result.updateCourseList.id)
          .then((publishResult) => {
            console.log("Kurs yayınlandı:", publishResult);
          })
          .catch((publishError) => {
            console.error("Kurs editlenirken bir hata oluştu:", publishError);
          });
        setTimeout(() => setUpdate(true), 5000);
      })
      .catch((error) => {
        console.error("Kurs güncellenirken bir hata oluştu:", error);
      });
  };

  if (!course) {
    return <div>Yükleniyor...</div>;
  }

  if (update) {
    return <AllCourses />;
  }


  return (
    <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
      <div className="flex flex-col md:flex-row mt-4 px-8 pt-6 pb-8 mb-4 h-full md:w-full">
        <span className="mr-2 ml-2" style={{ position: 'absolute', top: '120px', left: '150px' }}>({filledFields}/{totalFields})</span>
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
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kurs Fiyatı:</label>
            <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-transparent w-full focus:outline-none" />
              <FaPencilAlt />
            </div>
          </div>
          <div className="card p-4 bg-blue-100 rounded-lg shadow-lg mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kapak Fotoğrafı:</label>
            {photo && <img src={photo.url} alt="Kapak Fotoğrafı" />}
            <input type="file" onChange={handleCoverPhoto} />
          </div>
        </div>
        <button onClick={handleUpdate} style={{ position: 'fixed', bottom: '20px', right: '20px' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Kursu Güncelle
        </button>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default EditCourse;
