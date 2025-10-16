import React, { useEffect, useRef } from 'react';
import '../about/about.scss';
import { Fancybox } from '@fancyapps/ui';

interface AboutDataInterface {
  id: number;
  title: string;
  text: string;
  image: string;
}

const AboutData: AboutDataInterface[] = [
  {
    id: 1,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image1.png',
  },
  {
    id: 2,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image2.png',
  },
  {
    id: 3,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image3.png',
  },
  {
    id: 4,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image4.png',
  },
  {
    id: 5,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image5.png',
  },
  {
    id: 6,
    title: 'Hotel Management',
    text: 'Create your own Booking and manage!',
    image: '/image6.png',
  },
];

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // @ts-expect-error binc
    Fancybox.bind("[data-fancybox='about-gallery']", {
      animated: true,
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
    });

    const video = videoRef.current;
    if (video) {
      video.playbackRate = 2;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="about-wrapper" id="about">
      <div className="about">
        <div className="top-title">
          <h2>What are we doing?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat
            nesciunt non, numquam rem asperiores nihil quae inventore pariatur minima?
          </p>
        </div>

        <div className="grid-data">
          {AboutData.map(data => (
            <div key={data.id} className="about-item">
              <div className="top-texts">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
              <div className="image-container">
                <a
                  href={data.image}
                  data-fancybox="about-gallery"
                  data-caption={data.title}
                >
                  <img src={data.image} alt={data.title} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="video-container">
          <video
            ref={videoRef}
            src="/video.mp4"
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            controls={false}
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
