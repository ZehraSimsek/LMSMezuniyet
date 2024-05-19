// import React from "react";

// function VideoPlayer({ videoUrl , poster}) {
//   return (
//     <video
//       width={1000}
//       height={250}
//       controls
//       key={videoUrl}
//       className="rounded-sm"
//       poster={poster}
//     >
//       <source src={videoUrl} type="video/mp4" />
//     </video>
//   );
// }

// export default VideoPlayer;

import React, { useRef } from 'react';

const VideoPlayer = ({ videoUrl, poster }) => {
  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;

    console.log(`The video is ${video.duration} seconds long.`);
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
