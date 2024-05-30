import React from 'react';
import ProgressCourseItem from './ProgressCourseItem';

function CourseList({ userEnrolledCourses }) {
  const completedCourses = userEnrolledCourses.filter(course => course.completedChapter.length === course.totalChapters);
  const inProgressCourses = userEnrolledCourses.filter(course => course.completedChapter.length !== course.totalChapters);

  return (
    <div className='p-6 mt-3 rounded-sm'>
      <h2 className="text-[20px] font-bold text-sky-700 mr-2 mt-2">Alınan Kurslar</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {inProgressCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} isCompleted={false} />
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {completedCourses.map((item, index) => (
          <ProgressCourseItem key={index} course={item} isCompleted={true} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;