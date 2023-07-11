import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './styles/CustomerCases.scss';
import Header from './Header';
import Image from '../images/jonas.jpeg';

const videoData = [
  {
    src: 'https://www.youtube.com/embed/video1?autoplay=1',
    thumbnail: Image,
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/video2?autoplay=1',
    thumbnail: Image,
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/video3?autoplay=1',
    thumbnail: Image,
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/video4?autoplay=1',
    thumbnail: Image,
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
];

function CustomerCases() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePressPlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <div className="video-container">
      <Header />
      <div className="videos">
        {videoData.map((video, index) => (
          <div className={`video-wrapper ${video.className}`} key={index}>
            {playingVideo === index ? (
              <iframe
                src={video.src}
                title={video.alt}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="image-thumbnail">
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="video-thumbnail"
                />
                <PlayCircleFilledWhiteIcon
                  className="play-button"
                  onClick={() => handlePressPlay(index)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerCases;
