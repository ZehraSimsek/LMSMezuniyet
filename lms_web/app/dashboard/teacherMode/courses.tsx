import React, { useState, useEffect } from 'react';
import { FaPlus, FaPencilAlt, FaTimes } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [chapterNo, setChapterNo] = useState("1");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseCategories, setCourseCategories] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [videoUri, setVideoUri] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    })).sort((a, b) => categoryCounts[b.value] - categoryCounts[a.value]);

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
    
      if (missingFields.length > 0) {
        toast.error(`Lütfen tüm alanları doldurunuz: ${missingFields.join(", ")}`);
        return;
      }
    }
    if (price < 10 && free === "yes") {
      toast.error("Ücretli bir kurs için fiyat en az 10 TL olmalıdır.");
      return;
    }
    if (chapterNo !== "1") {
      toast.error("Önce ilk bölümü yüklemelisiniz!");
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
          throw new Error(`Cover photo hatası ${coverUploadResponse.status}`);
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
          throw new Error(`Chapter video hatası ${uploadResponse.status}`);
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
      console.log(result);

      const publishResult = await GlobalApi.publishCourse(result.createCourseList.id);
      console.log("Kurs yayınlandı:", publishResult);

      setTimeout(() => setShowForm(false), 5000);
    } catch (error) {
      console.error("Kurs eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      {!showForm && <AllCourses />}
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

