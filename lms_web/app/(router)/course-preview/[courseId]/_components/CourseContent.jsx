import React,{useState} from 'react'
import {Lock,Play} from 'lucide-react'

function CourseContent({courseInfo ,setActiveChapterIndex, isUserAlreadyEnrolled, watchMode=false, completedChapter}) {
    const [activeIndex , setActiveIndex] = useState(0);
    const checkIsChapterCompleted = (chapterId) => {
        return completedChapter.find(item => item.chapterId === chapterId)
    }

  return (
    <div className='p-3 bg-white rounded-sm mt-3'>
        <h2>Kurs İçeriği</h2>
        {courseInfo.chapter.map((item , index) => (
            <div>
            <h2 className={`p-3 text-[14px] flex justify-between 
                items-center border rounded-sm px-4 
                cursor-pointer mt-2 hover:bg-gray-200 hover:text-gray-500 
                ${activeIndex == index && 'bg-purple-600 text-white'}
                ${isUserAlreadyEnrolled&&'hover: bg-purple-600 hover:text-white'}
                ${watchMode&&checkIsChapterCompleted(item.id)&&
                'border-teal-600 bg-teal-500 text-black'
                }
                `}
                onClick={() => {watchMode&&setActiveChapterIndex(index);
                watchMode&&setActiveIndex(index)}}>
                   {index+1}. {item.name}
                   {activeIndex == index||isUserAlreadyEnrolled?
                   <Play className="h-4 w-4"/>:
                   <Lock className="h-4 w-4"/>}
                </h2>
            </div>
        ))}
    </div>
  )
}

export default CourseContent