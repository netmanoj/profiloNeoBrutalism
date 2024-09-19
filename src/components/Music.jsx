import React, { useEffect } from 'react';
import { Howl } from 'howler';


// Define Howl instances
const sounds = [
  new Howl({
    src: ['/sounds/bubbles.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading bubbles.mp3', error),
  }),
  new Howl({
    src: ['/sounds/clay.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading clay.mp3', error),
  }),
  new Howl({
    src: ['/sounds/confetti.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading confetti.mp3', error),
  }),
  new Howl({
    src: ['/sounds/glimmer.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading glimmer.mp3', error),
  }),
  new Howl({
    src: ['/sounds/moon.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading moon.mp3', error),
  }),
  new Howl({
    src: ['/sounds/ufo.mp3'],
    volume: 1.0,
    onloaderror: (id, error) => console.error('Error loading ufo.mp3', error),
  }),
];

const Music = () => {
  useEffect(() => {
    const pads = document.querySelectorAll('.pads > .pad');

    const handleClick = (event) => {
      const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
      console.log(`Playing sound for pad ${index}`);
      if (sounds[index]) {
        sounds[index].stop(); // Stop any currently playing sound
        sounds[index].play(); // Play the new sound
      } else {
        console.error(`No sound found for pad ${index}`);
      }
    };

    pads.forEach((pad) => {
      pad.addEventListener('click', handleClick);
    });

    return () => {
      pads.forEach((pad) => {
        pad.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section className="music">
      <p className="font-mono">Click the boxes below to play music</p>
      <div className="pads">
        <div className="pad" data-index="0"></div>
        <div className="pad" data-index="1"></div>
        <div className="pad" data-index="2"></div>
        <div className="pad" data-index="3"></div>
        <div className="pad" data-index="4"></div>
        <div className="pad" data-index="5"></div>
      </div>
    </section>
  );
};

export default Music;
