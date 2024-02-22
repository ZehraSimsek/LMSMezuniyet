import React from 'react'
import {Lock} from 'lucide-react'

function CourseContent({courseInfo}) {
    const [activeIndex , setActiveIndex] = useState(0);

  return (
    <div className='p-3 bg-white rounded-sm mt-3'>
        <h2>Kursun Içeriği</h2>
        {courseInfo.chapter.map((item , index) => {
            <div>
            <h2 className={`p-2 text-[14px] flex justify-between 
                items-center border rounded-sm px-4 
                cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-500 ${activeIndex === index ? 'bg-purple-600 text-white' : ''}`}> 
                   {index+1}. {item.name}
                   {activeIndex === index ?
                   <Play className="h-4 w-4"/>:
                   <Lock className="h-4 w-4"/>
                }
                   <Lock className="h-4 w-4"/>
                </h2>
            </div>
        })}
    </div>
  )
}

export default CourseContent