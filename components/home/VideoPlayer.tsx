import React, { useState } from 'react';

interface VideoPlayerProps {
  thumbnail: string;
  videoSrc: string;
  alt: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnail,
  videoSrc,
  alt,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-player">
      {!isPlaying ? (
        <img
          src={thumbnail}
          alt={alt}
          className="video-thumbnail"
          onClick={handlePlayVideo}
        />
      ) : (
        <video className="video-content" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
