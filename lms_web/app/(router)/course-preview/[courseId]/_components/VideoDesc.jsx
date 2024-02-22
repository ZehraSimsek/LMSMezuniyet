import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'

function VideoDesc({courseInfo}) {
  return (
    <div>
        <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
        <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
        <h2>{courseInfo.name}</h2>
        <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url}/>

        <h2 className='mt-5 text-[17px] font-semibold'>Kurs Hakkında..</h2>
        <div>
            <Markdown className="text-[12px] font-light mt-2 loading-6">{courseInfo.description}</Markdown>
        </div>
    </div>
  )
}

export default VideoDesc