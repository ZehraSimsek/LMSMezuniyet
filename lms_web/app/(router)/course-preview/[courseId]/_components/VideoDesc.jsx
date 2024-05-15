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

// import React, { useState , useEffect} from 'react'
// import VideoPlayer from './VideoPlayer'
// import Markdown from 'react-markdown'

// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
//   const [completedChapters, setCompletedChapters] = useState([]);

//   useEffect(() => {
//     const storedChapters = localStorage.getItem('completedChapters');
//     if (storedChapters) {
//       setCompletedChapters(JSON.parse(storedChapters));
//     }
//   }, []);

//   const handleChapterCompletion = (chapterId, isCompleted) => {
//     setChapterCompleted(chapterId, isCompleted);
//     setCompletedChapters(prevChapters => {
//       const updatedChapters = [...prevChapters, chapterId];
//       localStorage.setItem('completedChapters', JSON.stringify(updatedChapters));
//       return updatedChapters;
//     });
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
//                   onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id, true)}
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

// import React, { useState, useEffect } from 'react'
// import VideoPlayer from './VideoPlayer'
// import Markdown from 'react-markdown'

// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
//   const [completedChapters, setCompletedChapters] = useState([]);

//   // useEffect(() => {
//   //   if (courseInfo?.chapter) {
//   //     const initialCompletedChapters = courseInfo.chapter.map(chapter => chapter.isCompleted);
//   //     setCompletedChapters(initialCompletedChapters);
//   //   }
//   // }, [courseInfo]);
  
//   const handleChapterCompletion = (chapterId) => {
//     if (!completedChapters[activeChapterIndex]) {
//       setChapterCompleted(chapterId, true);
//       setCompletedChapters(prevChapters => {
//         const updatedChapters = [...prevChapters];
//         updatedChapters[activeChapterIndex] = true;
//         return updatedChapters;
//       });
//     }
//   }
  
//   useEffect(() => {
//     if (completedChapters[activeChapterIndex]) {
//       setCompletedChapters(prevChapters => {
//         const updatedChapters = [...prevChapters];
//         updatedChapters[activeChapterIndex] = true;
//         return updatedChapters;
//       });
//     }
//   }, [completedChapters[activeChapterIndex]]);  

//   return (
//     <div>
//       <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
//       <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
//       <h2>{courseInfo.name}</h2>
//       <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

//       <h2 className='mt-5 text-[17px] font-semibold'>
//         {
//           watchMode ?
//           <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
//             {!completedChapters[activeChapterIndex] && 
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
//               >
//                 Tamamlandı
//               </button>
//             }
//           </span> :
//           <span>Kurs Hakkında..</span>
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

// import React, { useState, useEffect } from 'react'
// import VideoPlayer from './VideoPlayer'
// import Markdown from 'react-markdown'

// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
//   const [completedChapters, setCompletedChapters] = useState([]);

//   const handleChapterCompletion = (chapterId) => {
//     if (completedChapters[activeChapterIndex]) {
//       setChapterCompleted(chapterId, true);
//       setCompletedChapters(prevChapters => {
//         const updatedChapters = [...prevChapters];
//         updatedChapters[activeChapterIndex] = true;
//         return updatedChapters;
//       });
//     }
//   }

//   useEffect(() => {
//     if (!completedChapters[activeChapterIndex]) {
//       setCompletedChapters(prevChapters => {
//         const updatedChapters = [...prevChapters];
//         updatedChapters[activeChapterIndex] = true;
//         return updatedChapters;
//       });
//     }
//   }, [completedChapters[activeChapterIndex]]);  

//   return (
//     <div>
//       <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
//       <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
//       <h2>{courseInfo.name}</h2>
//       <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

//       <h2 className='mt-5 text-[17px] font-semibold'>
//         {
//           watchMode ?
//           <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
//             {completedChapters[activeChapterIndex] && 
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
//               >
//                 Tamamlandı
//               </button>
//             }
//           </span> :
//           <span>Kurs Hakkında..</span>
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

// import React, { useState, useEffect } from 'react';
// import VideoPlayer from './VideoPlayer';
// import Markdown from 'react-markdown';
// import GlobalApi from '../../../../_utils/GlobalApi';
// import { useUser } from "@clerk/nextjs";


// function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted, courseId, userEmail }) {
//   const [completedChapters, setCompletedChapters] = useState([]);
//   const [view, setView] = useState(true);
//   const {user} = useUser();

//   const handleChapterCompletion = (chapterId) => {
//     setChapterCompleted(chapterId, true);
//     setCompletedChapters(prevChapters => {
//       const updatedChapters = [...prevChapters];
//       updatedChapters[activeChapterIndex] = true;
//       return updatedChapters;
//     });
//   };

//   useEffect(() => {
//     const checkChapterCompletionStatus = async () => {
//       const result = await GlobalApi.getChapterCompletionStatus(courseInfo.id, user.primaryEmailAddress.emailAddress);
//       const completedChapters = result?.userEnrollCourses?.[0]?.completedChapter || [];
//       const isCompleted = completedChapters.some(chapter => chapter.chapterId === courseInfo.chapter[activeChapterIndex].id && chapter.isCompleted);

//       if (isCompleted) {
//         setView(false);
//       }
//     };

//     checkChapterCompletionStatus();
//   }, [activeChapterIndex, courseId, courseInfo.chapter, userEmail]);

//   return (
//     <div>
//       <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
//       <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
//       <h2>{courseInfo.name}</h2>
//       <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

//       <h2 className='mt-5 text-[17px] font-semibold'>
//         {
//           watchMode ?
//           <span className='flex justify-between items-center'>
//             {courseInfo?.chapter[activeChapterIndex]?.name}
//             {view &&
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
//               >
//                 Tamamlandı
//               </button>
//             }
//           </span> :
//           <span>Kurs Hakkında..</span>
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
//   );
// }

// export default VideoDesc;

import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import GlobalApi from '../../../../_utils/GlobalApi';
import { useUser } from '@clerk/clerk-react';

function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
  const { user } = useUser();
  const [completedChapters, setCompletedChapters] = useState([]);

  const handleChapterCompletion = (chapterId) => {
    setChapterCompleted(chapterId, true);
    setCompletedChapters(prevChapters => {
      const updatedChapters = [...prevChapters];
      updatedChapters[activeChapterIndex] = true;
      return updatedChapters;
    });
  };

  useEffect(() => {
    const checkChapterCompletionStatus = async () => {
      if (user && user.primaryEmailAddress && courseInfo && courseInfo.id && courseInfo.chapter && courseInfo.chapter[activeChapterIndex]) {
        const result = await GlobalApi.getChapterCompletionStatus(courseInfo.id, user.primaryEmailAddress.emailAddress);
        const completedChapters = result?.userEnrollCourses?.[0]?.completedChapter || [];
        const isCompleted = completedChapters.some(chapter => chapter.chapterId === courseInfo.chapter[activeChapterIndex].id && chapter.isCompleted);

        setCompletedChapters(prevChapters => {
          const updatedChapters = [...prevChapters];
          updatedChapters[activeChapterIndex] = isCompleted;
          return updatedChapters;
        });
      }
    };

    checkChapterCompletionStatus();
  }, [activeChapterIndex, courseInfo, user]);

  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
      <h2>{courseInfo.name}</h2>
      <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url} poster={!watchMode ? courseInfo?.banner?.url : null} />

      <h2 className='mt-5 text-[17px] font-semibold'>
        {
          watchMode ?
          <span className='flex justify-between items-center'>
            {courseInfo?.chapter[activeChapterIndex]?.name}
            {completedChapters[activeChapterIndex] === false && // Butonu yalnızca tamamlanmamışsa göster
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleChapterCompletion(courseInfo?.chapter[activeChapterIndex]?.id)}
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
            <Markdown className="text-[12px] font-light mt-2 leading-6">{courseInfo?.chapter[activeChapterIndex]?.shortDesc}</Markdown>
            : <Markdown className="text-[12px] font-light mt-2 leading-6">{courseInfo.description}</Markdown>
        }
      </div>
    </div>
  );
}

export default VideoDesc;