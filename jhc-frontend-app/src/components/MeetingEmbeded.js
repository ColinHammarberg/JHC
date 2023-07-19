import React, { useEffect } from 'react';

const MeetingsEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/jonas-hammarberg?embed=true"></div>
  );
};

export default MeetingsEmbed;