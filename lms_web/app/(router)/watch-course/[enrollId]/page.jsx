"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import VideoDesc from '../../course-preview/[courseId]/_components/VideoDesc';
import CourseContent from '../../course-preview/[courseId]/_components/CourseContent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WatchCourse({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [completedChapter, setCompletedChapter] = useState([])

  useEffect(() => {
    params && user && getUserEnrolledCourseDetails();
  }, [params && user])

  const getUserEnrolledCourseDetails = () => {
    GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        if (resp.userEnrollCourses && resp.userEnrollCourses[0] && resp.userEnrollCourses[0].courseList) {
          setCompletedChapter(resp?.userEnrollCourses[0]?.completedChapter)
          setCourseInfo(resp.userEnrollCourses[0].courseList);
        } else {
          console.error('Unexpected API response', resp);
        }

      }

      )
  }

  const onChapterComplete = (chapterId) => {
    GlobalApi.markChapterCompleted(params.enrollId, chapterId)
      .then(resp => {
        console.log(resp);
        if (resp) {
          toast.success('Tamamlandı olarak işaretlendi', {
            position: "top-center"
          });
          getUserEnrolledCourseDetails();
        }
      })
  }

  return courseInfo.name && (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
          <div className='col-span-2 bg-white p-10 md:p-36 pt-10'>
            <VideoDesc courseInfo={courseInfo}
              activeChapterIndex={activeChapterIndex}
              watchMode={true}
              setChapterCompleted={(chapterId) => onChapterComplete(chapterId)} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <CourseContent isUserAlreadyEnrolled={true} courseInfo={courseInfo}
                watchMode={true}
                setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
                completedChapter={completedChapter}
              />
            </div>
          </div>
        </div>

        <ToastContainer />
    </div >
  )
}

export default WatchCourse
