import React, { useState } from 'react';
import './styles/VideoCases.scss';
import Header from './Header';
import Tabs, { useTabs } from './Tabs';
import BoxButton from './BoxButton';
import JonasInspiration from '../images/Jonas-inspiration.png';
import JonasSpeech from '../images/Jonas-speech.png';
import useMobileQuery from './queries/useMobileQuery';

const inspirationVideos = [
  {
    src: 'https://www.youtube.com/embed/D2QVjE7OPio',
    thumbnail: 0,
    text: 'Byt Perspektiv',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/DZxaV_15EPM',
    thumbnail: 0,
    text: 'Förändringsledning som Urs',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/A6CPhJ8GWhU',
    thumbnail: 0,
    text: 'Vilket typ av hotell skulle du då vilja driva?',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZYh86E_CbiY',
    thumbnail: 0,
    text: 'Låna religionens framgångsrecept',
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
];

const PublicVideos = [
  {
    src: 'https://www.youtube.com/embed/3Ebi8fr88y4',
    thumbnail: 1,
    text: 'Vision, Kultur och Ledarskap',
    alt: 'Thumbnail 1',
    className: 'video-1'
  },
  {
    src: 'https://www.youtube.com/embed/F9ZAW43M9HQ',
    thumbnail: 1,
    text: 'Digital Transformation',
    alt: 'Thumbnail 2',
    className: 'video-2'
  },
  {
    src: 'https://www.youtube.com/embed/TPrge9pPPpA',
    thumbnail: 1,
    text: 'Microsoft Tech Days',
    alt: 'Thumbnail 3',
    className: 'video-3'
  },
  {
    src: 'https://www.youtube.com/embed/ZlbiEgNAiEc',
    thumbnail: 1,
    text: 'Autonomi Utveckling Syfte',
    alt: 'Thumbnail 4',
    className: 'video-4'
  }
]

function VideoCases() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const { tabs, changeTab, activeTab } = useTabs(
    ['Inspiration', 'Public speech']
  );
  const { isMobile } = useMobileQuery();

  const videos = activeTab === 1 ? PublicVideos : inspirationVideos;

  const handlePressPlay = (index) => {
    setTimeout(() => {
      setPlayingVideo(index);
    }, [1500]);
    console.log('playingVideo', playingVideo);
  };

  const handleOnChangeTab = (value) => {
    console.log('value', value);
    changeTab(value);
  };

  return (
    <div className="video-container">
      <Header tabs={tabs} onChange={handleOnChangeTab} isMobile={isMobile} videoCases />
      {isMobile &&
      <div className="tabs">
        <Tabs
          tabs={tabs}
          onChange={handleOnChangeTab}
          variant="tabs-level-2 preview-details-privacy-level"
        />
      </div>
      }
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
                  <BoxButton onClick={() => handlePressPlay(index)} variant={video.thumbnail === 0 ? JonasSpeech : JonasInspiration} type={video.thumbnail} />
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
