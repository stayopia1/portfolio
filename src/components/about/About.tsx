import React, { useEffect, useRef } from 'react';
import '../about/about.scss';
import { Fancybox } from '@fancyapps/ui';
import { useTranslation } from 'react-i18next';

interface AboutDataInterface {
  id: number;
  title: string;
  image: string;
}

const About: React.FC = () => {
  const { t } = useTranslation();

  const AboutData: AboutDataInterface[] = [
    {
      id: 1,
      title: t('about.title_one'),
      image: '/newimage1.png',
    },
    {
      id: 2,
      title: t('about.title_two'),
      image: '/newimage2.png',
    },
    {
      id: 3,
      title: t('about.title_three'),
      image: '/image3.png',
    },
    {
      id: 4,
      title: t('about.title_four'),
      image: '/image4.png',
    },
    {
      id: 5,
      title: t('about.title_five'),
      image: '/image5.png',
    },
    {
      id: 6,
      title: t('about.title_six'),
      image: '/image6.png',
    },
  ];

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
      video.playbackRate = 1.3;
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
          <h2>{t('what_are_we_doing')}</h2>
          <p>{t('what_are_we_doing_text')}</p>
        </div>

        <div className="grid-data">
          {AboutData.map(data => (
            <div key={data.id} className="about-item">
              <div className="top-texts">
                <h3>{data.title}</h3>
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

        {/* video section */}
        <div className="video-section">
          <div className="top-title">
            <h2>{t('video_text')}</h2>
          </div>
          <div className="video-container">
            <video
              ref={videoRef}
              src="/video2.mp4"
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
      </div>
    </section>
  );
};

export default About;
