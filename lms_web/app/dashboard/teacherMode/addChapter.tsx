import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaPencilAlt, FaEdit, FaTrash, FaList, FaPlusCircle } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetch from 'node-fetch';
import FormData from 'form-data';
import GlobalApi from '../../_utils/GlobalApi';
import EditChapter from './editChapter';
import AllCourses from './allCourse';

const HYGRAPH_ASSET_TOKEN = Your master key;
const MASTER = Your master key;

function AddChapter({ courseId }) {
  const [chapterName, setChapterName] = useState("");
  const [chapterDesc, setChapterDesc] = useState("");
  const [chapterNo, setChapterNo] = useState("");
  const [videoUri, setVideoUri] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [editingChapterId, setEditingChapterId] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [showAddChapterForm, setShowAddChapterForm] = useState(false);
  const [showCourseList, setShowCourseList] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    GlobalApi.getAllCourseList().then((result) => {
      setCourseList(result.courseLists.filter(course => course.id === courseId));
    });
  }, [user, trigger]);

  const handleChapterVideo = (event) => {
    setVideoUri(event.target.files[0]);
  };

  const handleDeleteChapter = async (courseId, chapterId, chapterNumber) => {
    try {
      console.log("numero ", chapterNumber);
      if (chapterNumber === 1) {
        toast.error("Birinci bölümü silemezsiniz!");
      } else {
        const result = await GlobalApi.deleteChapter({ courseId, chapterId });
        toast.success("Bölüm başarıyla silindi!");
        console.log('Bölüm başarıyla silindi:', result);
        const resp = await GlobalApi.GetTotalChapters(courseId);
        let counterEnrollValue = resp.courseList.totalChapters;
        counterEnrollValue = counterEnrollValue - 1;
        const updateResult = await GlobalApi.totalChaptersCounter(courseId, counterEnrollValue);
        console.log("Sonuçlar: ", updateResult);
        const publishResult = await GlobalApi.publishCourse(result.updateCourseList.id);
        console.log("Bölüm silindi:", publishResult);
        setTrigger(trigger + 1);
      }
    } catch (error) {
      toast.error("Bölüm silinirken hatayla karşılaşıldı.");
      console.error('Bölüm silinirken hatayla karşılaşıldı.', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!chapterName || !chapterDesc || !chapterNo || !videoUri) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      for (const course of courseList) {
        for (const chap of course.chapter) {
          if (chap.chapterNumber === parseInt(chapterNo, 10)) {
            toast.error("Bu bölüm numarası zaten kullanılıyor.");
            return;
          }
        }
      }

      let coverVideoId = null;
      if (videoUri) {
        const form = new FormData();
        form.append('fileUpload', videoUri);
        console.log(videoUri);

        const uploadResponse = await fetch(`${MASTER}/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
          },
          body: form,
        });
        if (!uploadResponse.ok) {
          throw new Error(`Video asset yüklenemedi:  ${uploadResponse.status}`);
        }

        const responseData = await uploadResponse.json();
        coverVideoId = responseData.id;

        const publishVideoAssetResult = await GlobalApi.publishAsset(coverVideoId);
        console.log("Chapter video asset yayınlandı:", publishVideoAssetResult);
      }

      const chapterData = {
        courseId,
        chapterName,
        chapterDesc,
        chapterNum: parseFloat(chapterNo),
        videoUri: coverVideoId,
      };

      const result = await GlobalApi.addChapter(chapterData);
      toast.success("Bölüm Ekleme Başarılı!");
      console.log(result);

      const publishResult = await GlobalApi.publishCourse(result.updateCourseList.id);
      console.log("Yeni bölüm eklendi:", publishResult);
      setTrigger(trigger + 1);
      setChapterName("");
      setChapterDesc("");
      setChapterNo("");
      setVideoUri(null);

      setShowAddChapterForm(false);
    } catch (error) {
      console.error("Bölüm eklenirken bir hata oluştu:", error);
    }

    const resp = await GlobalApi.GetTotalChapters(courseId);
    let counterEnrollValue = resp.courseList.totalChapters;
    counterEnrollValue = counterEnrollValue + 1;
    const updateResult = await GlobalApi.totalChaptersCounter(courseId, counterEnrollValue);
    console.log("Sonuçlar: ", updateResult);
  };

  const handleEditChapter = (chapterId, courseId) => {
    setEditingChapterId(chapterId);
    setEditingCourseId(courseId);
    console.log("chapter id", chapterId, courseId);
  };

  if (editingChapterId) {
    return <EditChapter chapterId={editingChapterId} courseId={courseId} />;
  }

  if (showCourseList) {
    return <AllCourses />
  }

  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="w-full mt-4 px-8">
        {!showAddChapterForm ? (
          <div>
            <div className="flex items-center">
              <h2 className="text-[15px] font-bold text-sky-700 mr-4">
                <button
                  onClick={() => setShowAddChapterForm(true)}
                  className="text-blue-200 font-bold px-2 py-2 rounded"
                >
                  <FaPlusCircle className="h-6 w-6" />
                </button>Mevcut Bölümler</h2>
              <button
                onClick={() => setShowCourseList(true)}
                className="text-blue-200 font-bold px-3 py-2 rounded flex items-center ml-auto"
              >
                <FaList className="h-6 w-6 mr-2" />
                <h2 className="text-[15px] font-bold text-sky-700 mr-4">Kurslara Dön</h2>
              </button>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-blue-200">Bölüm No</th>
                  <th className="py-2 px-4 bg-blue-200">Bölüm Adı</th>
                  <th className="py-2 px-4 bg-blue-200">Bölüm Açıklaması</th>
                  <th className="py-2 px-4 bg-blue-200">Bölüm Videosu</th>
                  <th className="py-2 px-4 bg-blue-200"></th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((course, index) =>
                  course.chapter.map((chap, chapIndex) => (
                    <tr key={`${index}-${chapIndex}`}>
                      <td className="px-4 py-2">{chap.chapterNumber}</td>
                      <td className="px-4 py-2">{chap.name}</td>
                      <td className="px-4 py-2">{chap.shortDesc}</td>
                      <td className="px-4 py-2">
                        <video key={chap.id} controls width="200" height="120">
                          <source src={chap.video.url} type="video/mp4" />
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                      </td>
                      <td className="px-4 py-2">
                        <button onClick={(e) => { e.stopPropagation(); handleEditChapter(chap.id, course.id); }} className="">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); handleDeleteChapter(course.id, chap.id, chap.chapterNumber); }} className="">
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}
        <Modal
          isOpen={showAddChapterForm}
          onRequestClose={() => setShowAddChapterForm(false)}
          contentLabel="Bölüm Ekle"
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-blue-100 p-3 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
            <h2 className="text-[20px] font-bold text-sky-700 mr-4 mt-8">Bölüm Ayrıntıları</h2>
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Videosu:</label>
              <input type="file" onChange={handleChapterVideo} />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowAddChapterForm(false);
                  setChapterName("");
                  setChapterDesc("");
                  setChapterNo("");
                  setVideoUri(null);
                }}
                className=" bg-blue-200 hover:bg-blue-400 text-white font-bold py-2 px-4 mr-3 rounded"
              >
                Kapat
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Bölümü Kaydet
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div >
  );
}

export default AddChapter;
