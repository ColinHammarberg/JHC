import React, { useState } from 'react';
import './styles/VideoCases.scss';
import Header from './Header';
import Tabs, { useTabs } from './Tabs';
import Video1 from '../images/Video-1.png';
import Video2 from '../images/Video-2.png';
import Video3 from '../images/Video-3.png';
import Video4 from '../images/Video-4.png';

const inspirationVideos = [
  {
    src: 'https://www.youtube.com/embed/D2QVjE7OPio',
    thumbnail: Video1,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/DZxaV_15EPM',
    thumbnail: Video2,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/A6CPhJ8GWhU',
    thumbnail: Video3,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZYh86E_CbiY',
    thumbnail: Video4,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
];

const PublicVideos = [
  {
    src: 'https://www.youtube.com/embed/3Ebi8fr88y4',
    thumbnail: Video1,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/F9ZAW43M9HQ',
    thumbnail: Video2,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/TPrge9pPPpA',
    thumbnail: Video3,
    text: 'Strålfors Postnord - Public speach',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZlbiEgNAiEc',
    thumbnail: Video4,
    text: 'Strålfors Postnord - Public speach',
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
                <div class="thumbnail-wrapper">
                  <img
                    src={video.thumbnail}
                    alt={video.alt}
                    className="video-thumbnail"
                    onClick={() => handlePressPlay(index)}
                  />
                  <span className="text">{video.text}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCases;
