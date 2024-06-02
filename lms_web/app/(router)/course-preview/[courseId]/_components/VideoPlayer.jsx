import React, { useRef } from 'react';

const VideoPlayer = ({ videoUrl, poster }) => {
  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;

    console.log(`Video uzunluğu: ${video.duration}`);
  };

  return (
    <div>
      <video src={videoUrl} ref={videoEl} onLoadedMetadata={handleLoadedMetadata} poster={poster} width={1000} height={250} controls className="rounded-sm">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
