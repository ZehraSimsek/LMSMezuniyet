import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import fetch from 'node-fetch';
import FormData from 'form-data';
import GlobalApi from '../../_utils/GlobalApi';
const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYzOTgwMzQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYjFiODkxZDUtMzg4My00YzkxLTk3NjEtZGM3N2E1MjYzOGVhIiwianRpIjoiY2x3aTMybmp5Nzk0cjA3bGJnNDI4YW85dSJ9.e3COQwGVMnSIEMU6MEC_Gt60j9D1X9Jkttr9M2lXw7PHhoXqhNq1m8y8QCCt4-thrnJpwsTMW4pCskxZHdSsM8Irjs3895ck3fqYxu2XM8uiLMOahI8KaAo8dY-ufiGWDkN2Lj77QbPX3xqJUYVkZX9ftO0gPAj-dc2hG1XXXPY8SypYiO0UWYySxtYHkyeoxM-amj7S_eFUymviC-k5R5w6EYt2CXEul8RLl5s0lTgp4tNC3zub9-jmkdtxqxRKK3ArOkYvU2yv87xXTQyjMlaVXZvBBpsEzP0L4JAMqraS7iy4b-pR6i5jldEOZwE-ZsfYQ4MZDkdbkZn7Obc8uskf7bH_-UdNL5GkeefIqDnJJp7t_XCndCBtbD1E7ThjHxRt3ygnO7IJVdHGn6ndUbwJIPJtjA-ZWlaSKMy6nMzCftczaGz4J6-Qo0joNGJYwVjLSIHTyvEzHrYuvXhaFS5aOdfxrw17qgpJZtwI7pSNwrBJayoTJc0k1wsvk-MUQ9gdxfaX6Sa6nCa70DAkm_4RSoIsD1D_-BPO-H3VnsNtxd5D5BXbd55UgMtD1s6wwMSYkHyVQO4Ms6jKmwnflQ5uvaQfhw66XzCdlpjE1OgjFFqPCto2IDDSJucGWPyiyYL0QLNaz_iN1stuB7fajEEIuVD1O54XB7jk0a-ZmuM';
const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

function AddChapter({ courseId }) {
  const [chapterName, setChapterName] = useState("");
  const [chapterDesc, setChapterDesc] = useState("");
  const [chapterNo, setChapterNo] = useState("");
  const [videoUri, setVideoUri] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [confetti, setConfetti] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    GlobalApi.getAllCourseList().then((result) => {
      setCourseList(result.courseLists.filter(course => course.id === courseId));
    });
  }, [user]);

  const handleChapterVideo = (event) => {
    setVideoUri(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!chapterName || !chapterDesc || !chapterNo || !videoUri) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }
    try {
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

      const chapterData = {
        courseId,
        chapterName,
        chapterDesc,
        chapterNum: parseFloat(chapterNo),
        videoUri: coverVideoId,
      };

      const result = await GlobalApi.addChapter(chapterData);
      toast.success("Kurs Ekleme Başarılı!");
      setConfetti(true);
      console.log(result);

      const publishResult = await GlobalApi.publishCourse(result.updateCourseList.id);
      console.log("Yeni bölüm eklendi:", publishResult);
      setTimeout(() => setConfetti(false), 5000);
    } catch (error) {
      console.error("Bölüm eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      {confetti && <Confetti />}
      <div className="w-full mt-4 px-8">
        <h2 className="text-[20px] font-bold text-sky-700 mr-4">Mevcut Bölümler</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-200">Bölüm No</th>
              <th className="py-2 px-4 bg-blue-200">Bölüm Adı</th>
              <th className="py-2 px-4 bg-blue-200">Bölüm Açıklaması</th>
              <th className="py-2 px-4 bg-blue-200">Bölüm Videosu</th>
            </tr>
          </thead>
          <tbody>
            {courseList.map((course, index) => (
              course.chapter.map((chap, chapIndex) => (
                <tr key={`${index}-${chapIndex}`}>
                  <td className="border px-4 py-2">{chap.chapterNumber}</td>
                  <td className="border px-4 py-2">{chap.name}</td>
                  <td className="border px-4 py-2">{chap.shortDesc}</td>
                  <td className="border px-4 py-2">
                    <video key={chap.id} controls width="200" height="120">
                      <source src={chap.video.url} type="video/mp4" />
                      Tarayıcınız video etiketini desteklemiyor.
                    </video>
                  </td>
                </tr>
              ))
            ))}

          </tbody>
        </table>
        <h2 className="text-[20px] font-bold text-sky-700 mr-4 mt-8">Bölüm Ayrıntıları</h2>
        <form onSubmit={handleSubmit} className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg mt-2">
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
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Bölümü Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChapter;

