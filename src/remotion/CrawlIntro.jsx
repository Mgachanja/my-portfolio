import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Player } from '@remotion/player';
import { Button } from '@mui/material';
import { StarWarsCrawl, CRAWL_FPS, CRAWL_DURATION_IN_FRAMES, CRAWL_WIDTH, CRAWL_HEIGHT } from './StarWarsCrawl';

export const CrawlIntro = ({ onFinish }) => {
  const [dismissed, setDismissed] = useState(false);
  const playerRef = useRef(null);

  const dismiss = useCallback(() => {
    setDismissed(true);
    setTimeout(() => onFinish && onFinish(), 700);
  }, [onFinish]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.addEventListener('ended', dismiss);
    return () => player.removeEventListener('ended', dismiss);
  }, [dismiss]);

  return (
    <div className={`crawl-intro-overlay ${dismissed ? 'crawl-intro-overlay--hidden' : ''}`}>
      <Player
        ref={playerRef}
        component={StarWarsCrawl}
        durationInFrames={CRAWL_DURATION_IN_FRAMES}
        fps={CRAWL_FPS}
        compositionWidth={CRAWL_WIDTH}
        compositionHeight={CRAWL_HEIGHT}
        style={{ width: '100%', height: '100%' }}
        autoPlay
        initiallyMuted
        loop={false}
        controls={false}
        clickToPlay={false}
        acknowledgeRemotionLicense
      />
      <Button
        variant="outlined"
        onClick={dismiss}
        className="skip-intro-button"
      >
        Skip Intro
      </Button>
    </div>
  );
};
