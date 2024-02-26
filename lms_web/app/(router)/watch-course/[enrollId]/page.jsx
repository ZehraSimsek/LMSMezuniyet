"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import VideoDesc from '../../course-preview/[courseId]/_components/VideoDesc';
import CourseContent from '../../course-preview/[courseId]/_components/CourseContent';

function WatchCourse({params}) {
  const {user} = useUser();
  const [courseInfo , setCourseInfo] = useState([]);

  useEffect(() => {
    params&&user&&getUserEnrolledCourseDetails();
  }, [params&&user])

  const getUserEnrolledCourseDetails = () => {
      GlobalApi.getUserEnrolledCourseDetails(params.enrolledId, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        setCourseInfo(resp.userEnrollCourses[0]);
      })
  }

  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      <div className='col-span-2 bg-white p-10 md:p-36 pt-10'>
        <VideoDesc courseInfo={courseInfo}/>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <CourseContent isUserAlreadyEnrolled={true} courseInfo={courseInfo}/>
        </div>
      </div>
  </div>
  )
}

export default WatchCourse