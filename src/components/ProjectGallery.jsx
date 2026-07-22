import React, { useRef, useState } from 'react';
import { project } from '../data';
import arpella1 from '../assets/arpella-1.jpeg';
import arpella2 from '../assets/arpella-2.jpeg';
import arpella3 from '../assets/arpella-3.jpeg';
import arpella4 from '../assets/arpella-4.jpeg';
import arpella5 from '../assets/arpella-5.jpeg';

const images = [arpella1, arpella2, arpella3, arpella4, arpella5];

const ProjectGallery = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    setActive(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, offsetLeft } = track;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - offsetLeft - scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <div className="gallery">
      <div className="gallery__track" ref={trackRef} onScroll={handleScroll}>
        {images.map((src, i) => (
          <figure className="gallery__slide" key={src}>
            <img
              src={src}
              alt={`${project.name} — ${project.screenshots[i]}`}
              loading="lazy"
              width="720"
              height="1600"
            />
          </figure>
        ))}
      </div>

      <div className="gallery__controls">
        <div className="gallery__dots" role="tablist" aria-label="Screenshots">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Show screenshot ${i + 1}: ${project.screenshots[i]}`}
              className={`gallery__dot ${active === i ? 'gallery__dot--active' : ''}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <p className="gallery__caption mono">{project.screenshots[active]}</p>
      </div>
    </div>
  );
};

export default ProjectGallery;
