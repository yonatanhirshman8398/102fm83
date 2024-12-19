'use client';

import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current && audioRef.current) {
      playerRef.current = new Plyr(audioRef.current, {
        controls: [
          'play',
          'mute',
          'volume',
        ],
        volume: 1,
        invertTime: false,
      });

      playerRef.current.on('play', () => {
        try {
          if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: '102FM רדיו',
              artist: 'שידור חי',
              artwork: [
                { src: '/api/placeholder/96/96', sizes: '96x96', type: 'image/png' },
              ]
            });
          }
        } catch (e) {
          console.error('Error setting media session:', e);
        }
      });

      playerRef.current.on('error', () => {
        console.log('Attempting to reconnect...');
        const audio = playerRef.current.media;
        audio.load();
        playerRef.current.play().catch(e => console.error('Error playing audio:', e));
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center w-full max-w-lg">
        <h2 className="text-2xl text-gray-800 mb-6">102FM רדיו</h2>
        
        <audio ref={audioRef} controls>
          <source src="https://102.livecdn.biz/102fm_aac" type="audio/aac" />
          הדפדפן שלך לא תומך בהשמעת אודיו
        </audio>
        
        <div className="mt-4 text-sm text-gray-600">
          <span>שידור חי</span>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;