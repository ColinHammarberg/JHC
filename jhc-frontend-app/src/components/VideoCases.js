import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './styles/VideoCases.scss';
import Header from './Header';
import Urs from '../images/Urs-thumbnail.png';
import Image from '../images/jonas.jpeg';
import Tabs, { useTabs } from './Tabs';

const inspirationVideos = [
  {
    src: 'https://www.youtube.com/embed/D2QVjE7OPio',
    thumbnail: Image,
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/DZxaV_15EPM',
    thumbnail: Image,
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/A6CPhJ8GWhU',
    thumbnail: Image,
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZYh86E_CbiY',
    thumbnail: Image,
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
];

const PublicVideos = [
  {
    src: 'https://www.youtube.com/embed/3Ebi8fr88y4',
    thumbnail: Urs,
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/F9ZAW43M9HQ',
    thumbnail: Urs,
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/TPrge9pPPpA',
    thumbnail: Urs,
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZlbiEgNAiEc',
    thumbnail: Urs,
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
]

function VideoCases() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const { tabs, changeTab, activeTab } = useTabs(
    ['Inspiration', 'Public speech']
  );

  const videos = activeTab === 1 ? PublicVideos : inspirationVideos;

  const handlePressPlay = (index) => {
    setPlayingVideo(index);
  };

  const handleOnChangeTab = (value) => {
    console.log('value', value);
    changeTab(value);
  };

  return (
    <div className="video-container">
      <Header pageName="Inspiration" />
      <div className="tabs">
        <Tabs
          tabs={tabs}
          onChange={handleOnChangeTab}
          variant="tabs-level-2 preview-details-privacy-level"
        />
      </div>
      <div className="videos">
        {videos.map((video, index) => (
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

export default VideoCases;
