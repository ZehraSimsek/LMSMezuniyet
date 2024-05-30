import React from 'react'
import Image from 'next/image'
import { FaBookOpen, FaBook, FaStar  } from 'react-icons/fa'

function CourseItem({ course, maxEnroll }) {
  const SOME_THRESHOLD = maxEnroll-1;
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-blue-200 hover:scale-105 transition-transform duration-200'>
      <Image src={course?.banner?.url}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-l'
      />
      <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{course.name} <span className='text-gray-400'>[{course.tags}]</span></h2>
        <h2 className='text-[10px] text-gray-400'>{course.author}</h2>
        <h2 className='text-[15px]'>{course?.free ? 'Ücretsiz' : 'Ücretli'}</h2>
      </div>
      <div className='p-2 flex justify-between items-center'>
        <div>
          {course?.chapter?.length == 2 ? <FaBookOpen size={24} className='mr-2' /> : <FaBook size={24} />}
        </div>
        <div>
          {course.counterEnroll > SOME_THRESHOLD && (
            <div className=' text-yellow-300 text-xl rounded-bl-lg'><FaStar className='mr-1' /></div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CourseItem;



