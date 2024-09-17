import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Howl } from 'howler';

const sounds = [
  new Howl({ src: ['/sounds/bubbles.mp3'] }),
  new Howl({ src: ['/sounds/clay.mp3'] }),
  new Howl({ src: ['/sounds/confetti.mp3'] }),
  new Howl({ src: ['/sounds/glimmer.mp3'] }),
  new Howl({ src: ['/sounds/moon.mp3'] }),
  new Howl({ src: ['/sounds/ufo.mp3'] }),
];

// A helper function to create bubbles (visual effect) for sound interaction
const createBubble = (index) => {
  // Implement bubble creation here, based on the index
};

const Footer = () => {
  useEffect(() => {
    const pads = document.querySelectorAll(".pads > div");

    pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        console.log(`Playing sound for pad ${index}`); // Debugging
        if (sounds[index]) {
          sounds[index].stop(); // Stop any currently playing sound
          sounds[index].play(); // Play the new sound
          createBubble(index);
        } else {
          console.error(`No sound found for pad ${index}`);
        }
      });
    });

    return () => {
      // Clean up event listeners on component unmount
      pads.forEach((pad) => {
        pad.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <footer className="w-full px-10 py-6 bg-[#A6FAFF] border-black border-t-2 text-center">
      <p className="text-2xl mb-4">© 2023 Manoj | Made By a Human</p>
      <ul className="flex justify-center space-x-4 mb-6">
        <li>
          <a href="https://github.com/netmanoj/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/livingmanoj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900 transition duration-300" />
          </a>
        </li>
      </ul>

      {/* Sound playing section */}
      <section className="app">
        <div className="visual">
          {/* Add visual elements if needed */}
        </div>
        <p className='font-mono'>Touch the color boxes below to play music</p>

        <br />
        <div className="pads">
          <div className="pad1"> {/* No need for <audio> tags here */}
            {/* This pad will play sound 0 */}
          </div>
          <div className="pad2"> {/* This pad will play sound 1 */}
            {/* ... */}
          </div>
          <div className="pad3"> {/* This pad will play sound 2 */}
            {/* ... */}
          </div>
          <div className="pad4"> {/* This pad will play sound 3 */}
            {/* ... */}
          </div>
          <div className="pad5"> {/* This pad will play sound 4 */}
            {/* ... */}
          </div>
          <div className="pad6"> {/* This pad will play sound 5 */}
            {/* ... */}
          </div>
        </div>
      </section>
      <section className="padd">
        <div className="padd">
          <div className="pad6"> {/* This pad will play sound 5 */}
            {/* ... */}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
