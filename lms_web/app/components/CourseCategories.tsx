import React from 'react';
import Image from 'next/image';

const CourseCategories = ({title, image}) => {
  return (
    <div className='category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex flex-col items-center gap-4 justify-between border border-transparent hover:border-[#9280c7] hover:cursor-pointer group/edit' style={{position: 'relative'}}>
        <div style={{position: 'relative', width: '100px', height: '120px'}}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' /> 
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-32 px-2 py-1 text-sm text-center text-black rounded" style={{background: 'linear-gradient(to right, white, lightblue, white)'}}>{title}</span>
            </div>
        </div>
    </div>
  );
};

export default CourseCategories;
