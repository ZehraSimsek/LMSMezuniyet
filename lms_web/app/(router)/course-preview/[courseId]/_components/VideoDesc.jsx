import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import GlobalApi from '../../../../_utils/GlobalApi';
import { useUser } from '@clerk/clerk-react';

function VideoDesc({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
  const { user } = useUser();
  const [completedChapters, setCompletedChapters] = useState([]);
  const [videoDuration, setVideoDuration] = useState(null);
  const [showCompleteButton, setShowCompleteButton] = useState(false);

  const handleChapterCompletion = async (chapterId) => {
    setChapterCompleted(chapterId, true);
    setCompletedChapters(prevChapters => {
      const updatedChapters = [...prevChapters];
      updatedChapters[activeChapterIndex] = true;
      return updatedChapters;
    });

    const authorEmail = user.primaryEmailAddress.emailAddress;
    try {
      const userInfo = await GlobalApi.getUserInfoCounter(authorEmail);
      console.log(userInfo.userInfo);
      if (userInfo.userInfo) {
        const newCounter = userInfo.userInfo.completedChapterCounter + 1;
        await GlobalApi.updateRegisterCounter({ authorEmail, courseRegCounter: newCounter });
      } else {
        await GlobalApi.leaderCounter(authorEmail, 1);
      }
    } catch (error) {
      console.error('hata:', error);
    }
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

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        setVideoDuration(video.duration);
      });

      video.addEventListener('timeupdate', () => {
        if (video.duration - video.currentTime <= 1) {
          setShowCompleteButton(true);
        } else {
          setShowCompleteButton(false);
        }
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', () => setVideoDuration(video.duration));
        video.removeEventListener('timeupdate', () => { });
      }
    };
  }, []);

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
              {completedChapters[activeChapterIndex] === false && showCompleteButton &&
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
