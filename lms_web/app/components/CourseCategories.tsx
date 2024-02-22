import React from 'react';
import Image from 'next/image';

const CourseCategories = ({title, image}) => {
  return (
    <div className='category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex flex-col items-center gap-4 justify-between border border-transparent hover:border-[#9280c7] hover:cursor-pointer group/edit' style={{position: 'relative'}}>
        <div style={{position: 'relative', width: '100px', height: '120px'}}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' /> 
            <div className="relative group">
              <span className="absolute w-32 px-2 py-1 text-sm text-center text-white bg-stone-300 rounded opacity-0 group-hover:opacity-100 -bottom-12 left-1/2 transform -translate-x-1/2">{title}</span>
            </div>
        </div>
    </div>
  );
};

export default CourseCategories;
