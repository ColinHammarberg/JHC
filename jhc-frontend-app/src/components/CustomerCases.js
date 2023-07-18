import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './styles/CustomerCases.scss';
import Header from './Header';
import Image from '../images/jonas.jpeg';
import Urs from '../images/Urs-thumbnail.png';

const videoData = [
  {
    src: 'https://www.youtube.com/embed/SS7N2xBCw2U',
    thumbnail: Image,
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/wG7ff8obtRo',
    thumbnail: Image,
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/vyVMXrDekj0',
    thumbnail: Image,
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://youtube.com/embed/DZxaV_15EPM',
    thumbnail: Urs,
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
      <Header pageName="Inspiration" />
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
