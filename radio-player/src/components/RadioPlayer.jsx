import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const RadioPlayer = () => {
  const streamUrl = 'https://102.livecdn.biz/102fm_aac';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <div className="p-2 bg-gray-100">
            <h2 className="text-center font-bold text-gray-800">102FM Radio - Live Stream</h2>
          </div>
          <AudioPlayer
            src={streamUrl}
            autoPlay={false}
            showJumpControls={false}
            layout="stacked-reverse"
            customProgressBarSection={[]}
            customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
            autoPlayAfterSrcChange={false}
            style={{
              backgroundColor: 'white',
              boxShadow: 'none',
            }}
            onError={(e) => {
              console.error('Error loading audio:', e);
            }}
            onPlay={(e) => {
              console.log('Audio started playing');
              // Enable background playing
              if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                  title: '102FM Radio',
                  artist: 'Live Stream',
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;