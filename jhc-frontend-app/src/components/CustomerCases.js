import React from 'react';
// import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './styles/CustomerCases.scss';
import Header from './Header';
import Image from '../images/Jonas-5.png';

const videoData = [
  {
    src: 'https://www.youtube.com/embed/video1',
    thumbnail: Image,
    alt: 'Thumbnail 1',
    className: "video-1"
  },
  {
    src: 'https://www.youtube.com/embed/video2',
    thumbnail: Image,
    alt: 'Thumbnail 2',
    className: "video-2"
  },
  {
    src: 'https://www.youtube.com/embed/video3',
    thumbnail: Image,
    alt: 'Thumbnail 3',
    className: "video-3"
  },
  {
    src: 'https://www.youtube.com/embed/video4',
    thumbnail: Image,
    alt: 'Thumbnail 4',
    className: "video-4"
  },
];

function CustomerCases() {
  return (
    <div className="video-container">
      <Header />
      <div className="videos">
        {videoData.map((video, index) => (
            <div className={`video-wrapper ${video.className}`} key={index}>
                <iframe
                    src={video.src}
                    title={video.alt}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                {/* <img
                    src={video.thumbnail}
                    alt={video.alt}
                    className="video-thumbnail"
                />
                <PlayCircleFilledWhiteIcon /> */}
            </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerCases;
