// import React, { useState, useEffect } from 'react';
// import { FaPencilAlt, FaEdit } from 'react-icons/fa';
// import { useUser } from '@clerk/nextjs';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Confetti from 'react-confetti';
// import fetch from 'node-fetch';
// import FormData from 'form-data';
// import GlobalApi from '../../_utils/GlobalApi';
// const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTYzOTgwMzQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYjFiODkxZDUtMzg4My00YzkxLTk3NjEtZGM3N2E1MjYzOGVhIiwianRpIjoiY2x3aTMybmp5Nzk0cjA3bGJnNDI4YW85dSJ9.e3COQwGVMnSIEMU6MEC_Gt60j9D1X9Jkttr9M2lXw7PHhoXqhNq1m8y8QCCt4-thrnJpwsTMW4pCskxZHdSsM8Irjs3895ck3fqYxu2XM8uiLMOahI8KaAo8dY-ufiGWDkN2Lj77QbPX3xqJUYVkZX9ftO0gPAj-dc2hG1XXXPY8SypYiO0UWYySxtYHkyeoxM-amj7S_eFUymviC-k5R5w6EYt2CXEul8RLl5s0lTgp4tNC3zub9-jmkdtxqxRKK3ArOkYvU2yv87xXTQyjMlaVXZvBBpsEzP0L4JAMqraS7iy4b-pR6i5jldEOZwE-ZsfYQ4MZDkdbkZn7Obc8uskf7bH_-UdNL5GkeefIqDnJJp7t_XCndCBtbD1E7ThjHxRt3ygnO7IJVdHGn6ndUbwJIPJtjA-ZWlaSKMy6nMzCftczaGz4J6-Qo0joNGJYwVjLSIHTyvEzHrYuvXhaFS5aOdfxrw17qgpJZtwI7pSNwrBJayoTJc0k1wsvk-MUQ9gdxfaX6Sa6nCa70DAkm_4RSoIsD1D_-BPO-H3VnsNtxd5D5BXbd55UgMtD1s6wwMSYkHyVQO4Ms6jKmwnflQ5uvaQfhw66XzCdlpjE1OgjFFqPCto2IDDSJucGWPyiyYL0QLNaz_iN1stuB7fajEEIuVD1O54XB7jk0a-ZmuM';
// const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";


// function editChapter({ chapterId, courseId }) {
//     const [chapterName, setChapterName] = useState("");
//     const [chapterDesc, setChapterDesc] = useState("");
//     const [chapterNo, setChapterNo] = useState("");
//     const [videoUri, setVideoUri] = useState(null);
//     const [confetti, setConfetti] = useState(false);

//     useEffect(() => {
//         GlobalApi.getAllCourseList().then((result) => {
//             const course = result.courseLists.find(course => course.id === courseId);
//             if (course) {
//                 const chapter = course.chapter.find(chapter => chapter.id === chapterId);
//                 if (chapter) {
//                     setChapterName(chapter.name);
//                     setChapterDesc(chapter.shortDesc);
//                     setChapterNo(chapter.chapterNumber);
//                     setVideoUri(chapter.video?.fileName);
//                     console.log("chapter vie", chapter.video?.fileName);

//                 }
//             }
//         });
//     }, [chapterId, courseId]);
    

//     const handleChapterVideo = (event) => {
//         if (!event.target.files[0]) {
//             return;
//         }
    
//         setVideoUri(event.target.files[0]);
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!chapterName || !chapterDesc || !chapterNo || !videoUri) {
//             toast.error("Lütfen tüm alanları doldurun.");
//             return;
//         }

//         let coverVideoId = null;
//         if (videoUri) {
//             const form = new FormData();
//             form.append('fileUpload', videoUri);
//             console.log(videoUri);

//             const uploadResponse = await fetch(`${MASTER}/upload`, {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
//                 },
//                 body: form,
//             });
//             if (!uploadResponse.ok) {
//                 throw new Error(`Chapter video upload failed with status ${uploadResponse.status}`);
//             }

//             const responseData = await uploadResponse.json();
//             coverVideoId = responseData.id;

//             const publishVideoAssetResult = await GlobalApi.publishAsset(coverVideoId);
//             console.log("Chapter video asset yayınlandı:", publishVideoAssetResult);
//         }

//         const chapterData = {
//             courseId,
//             chapterId,
//             chapterName,
//             chapterDesc,
//             chapterNum: parseFloat(chapterNo),
//             videoUri: coverVideoId,
//         };

//         const result = await GlobalApi.updateChapter(chapterData);
//         toast.success("Bölüm Düzenleme Başarılı!");
//         setConfetti(true);
//         console.log(result);

//         const publishResult = await GlobalApi.publishCourse(result.updateChapterList.id);
//         console.log("Bölüm düzenlendi:", publishResult);
//         setTimeout(() => setConfetti(false), 5000);
//     };

//     return (
//         <div>
//             <ToastContainer />
//             {confetti && <Confetti />}
//             <div className="w-full mt-4 px-8">
//                 <h2 className="text-[20px] font-bold text-sky-700 mr-4 mt-8">Bölüm Ayrıntıları</h2>
//                 <form onSubmit={handleSubmit} className="card mb-6 p-4 bg-blue-100 rounded-lg shadow-lg mt-2">
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Numarası:</label>
//                         <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                             <input
//                                 type="number"
//                                 value={chapterNo}
//                                 onChange={(e) => setChapterNo(e.target.value)}
//                                 className="bg-transparent w-4/5 focus:outline-none"
//                             />
//                             <FaPencilAlt />
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Adı:</label>
//                         <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                             <input
//                                 type="text"
//                                 value={chapterName}
//                                 onChange={(e) => setChapterName(e.target.value)}
//                                 className="bg-transparent w-4/5 focus:outline-none"
//                             />
//                             <FaPencilAlt />
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Açıklaması:</label>
//                         <div className="border p-2 bg-gray-100 flex justify-between items-center rounded-lg">
//                             <input
//                                 type="text"
//                                 value={chapterDesc}
//                                 onChange={(e) => setChapterDesc(e.target.value)}
//                                 className="bg-transparent w-4/5 focus:outline-none"
//                             />
//                             <FaPencilAlt />
//                         </div>
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2">Bölüm Videosu:</label>
//                         <input type="file" onChange={handleChapterVideo} />
//                     </div>
//                     <div className="flex justify-end">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         >
//                             Bölümü Kaydet
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default editChapter


import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import fetch from 'node-fetch';
import FormData from 'form-data';
import GlobalApi from '../../_utils/GlobalApi';
const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTY0NzQwODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xza3BxbHQ2M3dwZzAxdXBsbTRuMHQ3MS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTU4ZTRiZDEtMTcyNS00NDZkLWIxYTUtMjM4MjkyOWE1ZjZiIiwianRpIjoiY2x3amNjbzFwNXI0djA3bWg4NTRsYjh2dCJ9.kAl4hSKYgxKatPJUK3MFV0T49MGJrhrXxztfKu9eKTVIzLxbpmI0CLIFZQmbnnp4sCPnNxnlwuniDwZheXlMFObE13Zq7SZbg76ZDVpWKHSScxoNWZPsJt9WCaJIVEIJT6Lga39E-JOjEAs7VmPIxE1qJKxcLjtMMcF4pkT6WOGK9e6_w6luWVNOC1QTZjFBbv4J1_8UP0KjxxVRNPp97zvCRM9xDlQrSjwBdUmQxfBmd2SGgB_y3NDemYgC6ttfypERGI_XQSIx0mCi6ve4b18CPU_XEG85qiKQibli9DCiKm21W41arqoiRsmP2L7tMdOWoJKW8PGfP1yClKPf6nD0l_YaU372iNKQR8R8WWj9FjdIsKyEsrxcpurUkS4DQbdxrqtvovuStWvl7Woar2tl5h2XE0-LEWq6LI5m2Xw-pToHs0Bq1ZoHYji0g4wS22IlmQWGrbkCHNmDoaxmy6MasEoPQKyp0cP1YzYC4RpkrMlNem3hN_3bIWHB81QSt-zjkdWaJRNYoEjwARIfQn91RLpZoPsM8fB8ocPtp-wCU1YHFBTVsB9s1ug0I2zzbEKLtrXFCN_ppKh8mVP69HGjc8DhcxV_J6lXxFvOuoygXviYVhf_4nG08tfxHx9cv-wJ3b6ee4b08VFj6FJau3jRDn8dOz_q64367D2jQ2Y';
const MASTER = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

function EditChapter({ chapterId, courseId }) {
    const [chapterName, setChapterName] = useState("");
    const [chapterDesc, setChapterDesc] = useState("");
    const [chapterNo, setChapterNo] = useState("");
    const [videoUri, setVideoUri] = useState(null);
    const [confetti, setConfetti] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        GlobalApi.getAllCourseList().then((result) => {
            const course = result.courseLists.find(course => course.id === courseId);
            if (course) {
                const chapter = course.chapter.find(chapter => chapter.id === chapterId);
                if (chapter) {
                    setChapterName(chapter.name);
                    setChapterDesc(chapter.shortDesc);
                    setChapterNo(chapter.chapterNumber);
                    setVideoUri(chapter.video?.id);
                }
            }
        });
    }, [chapterId, courseId]);
    

    const handleChapterVideo = (event) => {
        if (event.target.files[0]) {
            setVideoUri(event.target.files[0]);
        }else{
            setVideoUri(videoUri);
            console.log("seçilince , " ,videoUri)
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("chapter video", videoUri);

        if (!chapterName || !chapterDesc || !chapterNo || !videoUri) {
            toast.error("Lütfen tüm alanları doldurun.");
            return;
        }

        let coverVideoId = null;
        if (videoUri && typeof videoUri !== 'string') {
          const form = new FormData();
          form.append('fileUpload', videoUri);

          const uploadResponse = await fetch(`https://api-eu-west-2.hygraph.com/v2/clskpqlt63wpg01uplm4n0t71/master/upload`, {
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
        } else {
          coverVideoId = videoUri; 
        }

        const chapterData = {
            courseId,
            chapterId,
            chapterName,
            chapterDesc,
            chapterNum: parseFloat(chapterNo),
            videoUri : coverVideoId
        };

        const result = await GlobalApi.updateChapter(chapterData);
        toast.success("Bölüm Düzenleme Başarılı!");
        setConfetti(true);
        console.log(result);

        const publishResult = await GlobalApi.publishCourse(result.updateCourseList.id);
        console.log("Bölüm düzenlendi:", publishResult);
        setTimeout(() => setConfetti(false), 5000);
    };

    return (
        <div>
            <ToastContainer />
            {confetti && <Confetti />}
            <div className="w-full mt-4 px-8">
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

export default EditChapter;

