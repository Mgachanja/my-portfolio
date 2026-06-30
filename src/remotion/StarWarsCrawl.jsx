import { useEffect, useRef, useState } from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig, Easing } from 'remotion';
import { loadFont as loadCrawlFont } from '@remotion/google-fonts/PathwayGothicOne';
import { loadFont as loadLogoFont } from '@remotion/google-fonts/Orbitron';

const { fontFamily: crawlFontFamily } = loadCrawlFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});
const { fontFamily: logoFontFamily } = loadLogoFont('normal', {
  weights: ['700', '900'],
  subsets: ['latin'],
});

const CRAWL_TEXT = `It is a period of digital transformation.
Bold full-stack architectures, built by a
lone developer, have struck back against
slow, brittle legacy systems.

During the development, REBEL ENGINEER
MARK GACHANJA NGARI managed to architect
complete ecosystems of mobile, web, and
desktop platforms that powered real
business operations across the galaxy
of e-commerce and logistics.

Pursued by sinister technical debt and
the ever-present THIRD-PARTY API, our
hero races toward this portfolio,
carrying the blueprints that could
restore clean code and scalability
to the codebase...`;

const Logo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.8, fps * 2.8, fps * 4], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, fps * 4], [1.15, 0.85], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <div
        style={{
          fontFamily: logoFontFamily,
          fontWeight: 900,
          fontSize: 90,
          color: '#FFE81F',
          textAlign: 'center',
          letterSpacing: 6,
          opacity,
          scale,
          textShadow: '0 0 40px rgba(255, 232, 31, 0.5)',
        }}
      >
        MARK GACHANJA NGARI
        <div
          style={{
            fontSize: 34,
            marginTop: 24,
            color: '#FFE81F',
            letterSpacing: 14,
            fontWeight: 900,
            textShadow: [
              '0 0 6px rgba(255, 232, 31, 0.9)',
              '0 2px 0 #b8930a',
              '0 4px 0 #93750a',
              '0 6px 14px rgba(0, 0, 0, 0.8)',
            ].join(', '),
          }}
        >
          A PORTFOLIO
        </div>
      </div>
    </AbsoluteFill>
  );
};

const PERSPECTIVE = 900;
const NOMINAL_ROTATE_DEG = 27;

const Crawl = ({ crawlDurationFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(2200);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  const fadeIn = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const startY = CRAWL_HEIGHT * 0.6;
  const endY = -(textHeight + 100);

  const translateY = interpolate(frame, [0, crawlDurationFrames], [startY, endY], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.linear,
  });

  // The whole text block rotates as one rigid plane around its bottom edge, so its
  // far (top) corner sits at depth = textHeight * sin(rotateX) behind the camera.
  // If that depth gets close to (or exceeds) `perspective`, the CSS 3D projection
  // degenerates and the text appears to flip/invert mid-scroll. Cap the angle so
  // the depth never exceeds a safe fraction of the perspective distance.
  const maxSafeRotateRad = Math.asin(Math.min(1, (PERSPECTIVE * 0.65) / textHeight));
  const rotateDeg = Math.min(NOMINAL_ROTATE_DEG, (maxSafeRotateRad * 180) / Math.PI);

  return (
    <AbsoluteFill style={{ backgroundColor: '#000', overflow: 'hidden' }}>
      <AbsoluteFill
        style={{
          perspective: PERSPECTIVE,
          perspectiveOrigin: '50% 100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '56%',
            transformOrigin: '50% 100%',
            transform: `translateY(${translateY}px) rotateX(${rotateDeg}deg)`,
            opacity: fadeIn,
          }}
        >
          <div
            ref={textRef}
            style={{
              fontFamily: crawlFontFamily,
              fontSize: 38,
              lineHeight: 1.5,
              color: '#FFE81F',
              textAlign: 'justify',
              whiteSpace: 'pre-line',
              fontWeight: 400,
            }}
          >
            {CRAWL_TEXT}
          </div>
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0) 30%)',
        }}
      />
    </AbsoluteFill>
  );
};

const LOGO_DURATION_FRAMES = 30 * 4;

export const StarWarsCrawl = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <Sequence from={0} durationInFrames={LOGO_DURATION_FRAMES}>
        <Logo />
      </Sequence>
      <Sequence from={LOGO_DURATION_FRAMES} layout="none">
        <Crawl crawlDurationFrames={CRAWL_DURATION_IN_FRAMES - LOGO_DURATION_FRAMES} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const CRAWL_FPS = 30;
export const CRAWL_DURATION_IN_FRAMES = 30 * 22;
export const CRAWL_WIDTH = 1280;
export const CRAWL_HEIGHT = 720;
