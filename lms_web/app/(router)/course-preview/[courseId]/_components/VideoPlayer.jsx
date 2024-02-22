import React from 'react'

function VideoPlayer({videoUrl}) {
  return (
    <video
        width={100}
        height={250}
        controls
        className='rounded-sm'
    >
        <source src={videoUrl} type='video/mp4'/>
    </video>
  )
}

export default VideoPlayer