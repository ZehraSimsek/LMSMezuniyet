// import React from 'react'
// import VideoPlayer from './VideoPlayer'
// import Markdown from 'react-markdown'

// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
//   return (
//     <div>

//       <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
//       <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
//       <h2>{courseInfo.name}</h2>
//       <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

//       <h2 className='mt-5 text-[17px] font-semibold'>
//         {
//           watchMode ?
//             <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}
//               >
//                 Tamamlandı
//               </button>
//             </span> :
//             <span>Kurs Hakkında..</span>
//         }
//       </h2>
//       <div>
//         {
//           watchMode ?
//             <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo?.chapter[activeChapterIndex]?.shortDesc}</Markdown>
//             : <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo.description}</Markdown>
//         }

//       </div>

//     </div>
//   )
// }

// export default VideoDesc

import React, { useState , useEffect} from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'

function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
  const [completedChapters, setCompletedChapters] = useState([]);

  useEffect(() => {
    const storedChapters = localStorage.getItem('completedChapters');
    if (storedChapters) {
      setCompletedChapters(JSON.parse(storedChapters));
    }
  }, []);

  const handleChapterCompletion = (chapterId) => {
    setChapterCompleted(chapterId);
    setCompletedChapters(prevChapters => {
      const updatedChapters = [...prevChapters, chapterId];
      localStorage.setItem('completedChapters', JSON.stringify(updatedChapters));
      return updatedChapters;
    });
  }

  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
      <h2>{courseInfo.name}</h2>
      <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

      <h2 className='mt-5 text-[17px] font-semibold'>
        {
          watchMode ?
            <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
              {!completedChapters.includes(courseInfo?.chapter[activeChapterIndex]?.id) && 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
                  disabled={completedChapters.includes(courseInfo?.chapter[activeChapterIndex]?.id)}
                >
                  Tamamlandı
                </button>
              }
            </span> :
            <span>Kurs Hakkında..</span>
        }
      </h2>
      <div>
        {
          watchMode ?
            <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo?.chapter[activeChapterIndex]?.shortDesc}</Markdown>
            : <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo.description}</Markdown>
        }
      </div>
    </div>
  )
}

export default VideoDesc




// import React, { useState , useEffect} from 'react'
// import VideoPlayer from './VideoPlayer'
// import Markdown from 'react-markdown'
// import GlobalApi from '../../../../_utils/GlobalApi'
// import { useUser } from '@clerk/nextjs'

// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false }) {
//   const { user } = useUser();
//   const [completedChapters, setCompletedChapters] = useState([]);

//   useEffect(() => {
//     const storedChapters = localStorage.getItem('completedChapters');
//     if (storedChapters) {
//       setCompletedChapters(JSON.parse(storedChapters));
//     }
//   }, []);

//   useEffect(() => {
//     GlobalApi.getUserEnrolledCourseDetails(user.primaryEmailAddress.emailAddress)
//       .then(result => {
//         setCompletedChapters(result?.userEnrollCourses[0]?.completedChapter || []);
//       })
//       .catch(error => {
//         console.error("Failed to fetch completed chapters:", error);
//       });
//   }, [user.primaryEmailAddress.emailAddress]);

//   const handleChapterCompletion = (chapterId) => {
//     GlobalApi.markChapterCompleted(user.primaryEmailAddress.emailAddress, chapterId)
//       .then(() => {
//         setCompletedChapters(prevChapters => {
//           const updatedChapters = [...prevChapters, chapterId];
//           localStorage.setItem('completedChapters', JSON.stringify(updatedChapters));
//           return updatedChapters;
//         });
//       })
//       .catch(error => {
//         console.error("Failed to mark chapter as completed:", error);
//       });
//   }

//   return (
//     <div>
//       <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
//       <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
//       <h2>{courseInfo.name}</h2>
//       <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

//       <h2 className='mt-5 text-[17px] font-semibold'>
//         {
//           watchMode ?
//             <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
//               {!completedChapters.includes(courseInfo?.chapter[activeChapterIndex]?.id) && 
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
//                   disabled={completedChapters.includes(courseInfo?.chapter[activeChapterIndex]?.id)}
//                 >
//                   Tamamlandı
//                 </button>
//               }
//             </span> :
//             <span>Kurs Hakkında..</span>
//         }
//       </h2>
//       <div>
//         {
//           watchMode ?
//             <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo?.chapter[activeChapterIndex]?.shortDesc}</Markdown>
//             : <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo.description}</Markdown>
//         }
//       </div>
//     </div>
//   )
// }

// export default VideoDesc