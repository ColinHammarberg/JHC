import React, { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './styles/VideoCases.scss';
import Header from './Header';
import Tabs, { useTabs } from './Tabs';

const inspirationVideos = [
  {
    src: 'https://www.youtube.com/embed/D2QVjE7OPio',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/DZxaV_15EPM',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/A6CPhJ8GWhU',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZYh86E_CbiY',
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
];

const PublicVideos = [
  {
    src: 'https://www.youtube.com/embed/3Ebi8fr88y4',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/F9ZAW43M9HQ',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/TPrge9pPPpA',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZlbiEgNAiEc',
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
                <div
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
