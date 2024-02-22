import React from 'react';
import CourseCategories from './CourseCategories';
import Image from 'next/image';

const Categories = () => {
  const Content = [
    { title: 'Tasarım',  image: '/design.png' },
    { title: 'Development', image: '/developer.png' }, 
    { title: 'Fotoğrafçılık', image: '/photo.png'},
    { title: 'Data Science', image: '/datascience.png' },
    { title: 'Kişisel Gelişim', image: '/personaldev.png'},
    { title: 'Finans',image: '/finance.png' },
    { title: 'Öğretim', image: '/teaching.png' },
  ];

  return (
    <div id='category' className='w-full py-24 mt-18'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
        <h1 className='md:leading-[72px] text-3xl font-bold'>Başlıca <span className='text-[#302889]'>Kategorilerimiz</span></h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
          {Content.map((category, index) => (
            <div className="transform transition duration-500 ease-in-out hover:scale-105">
              <CourseCategories key={index} title={category.title} image={category.image}/>
            </div>
          ))}
        </div>
        <div style={{position: 'absolute', top:2135, right: 180}}>
          <Image src="/girl.png" alt="Girl" width={250} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Categories;

