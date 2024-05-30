"use client"
import React, { useEffect, useState } from 'react'
import VideoDesc from './_components/VideoDesc';
import CourseEnroll from './_components/CourseEnroll'
import GlobalApi from '../../../_utils/GlobalApi';
import CourseContent from './_components/CourseContent';
import { useUser } from '@clerk/nextjs';

function CoursePreview({params}) {
    const [courseInfo , setCourseInfo] = useState();
    const {user} = useUser();
    const [isUserAlreadyEnrolled , setIsUserAlreadyEnrolled] = useState();

    useEffect(() =>{
      params&&getCourseInfoById();
    },[params]);

    useEffect(() =>{
      courseInfo&&user&&getUserEnrollDetail();
    },[courseInfo, user]);
    
    const getCourseInfoById = () => {
        GlobalApi.getCourseById(params?.courseId)
        .then(resp => {
          setCourseInfo(resp?.courseList);
        })
    }

    const getUserEnrollDetail = () => {
        GlobalApi.getUserEnrollDetail(courseInfo.id , user.primaryEmailAddress.emailAddress)
        .then(resp => {
            if(resp?.userEnrollCourses){
              setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
            }
        })
    };

  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      <div className='col-span-2 bg-white p-10 md:p-36 pt-10'>
        <VideoDesc courseInfo={courseInfo}/>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <CourseEnroll isUserAlreadyEnrolled={isUserAlreadyEnrolled} courseInfo={courseInfo}/>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <CourseContent isUserAlreadyEnrolled={isUserAlreadyEnrolled} courseInfo={courseInfo}/>
        </div>
      </div>
    </div>
  )
  
}

export default CoursePreview
