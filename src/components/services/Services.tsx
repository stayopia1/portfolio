import React from 'react';
import '../services/services.scss';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { MdHotelClass } from 'react-icons/md';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import i18n from '../../i18n';

interface DataInterface {
  id: number;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18n.language;

  const Data: DataInterface[] = [
    {
      id: 1,
      title: t('services.title_one'),
      description: t('services.text_one'),
    },
    {
      id: 2,
      title: t('services.title_two'),
      description: t('services.text_two'),
    },
    {
      id: 3,
      title: t('services.title_three'),
      description: t('services.text_three'),
    },
    {
      id: 4,
      title: t('services.title_one'),
      description: t('services.text_one'),
    },
    {
      id: 5,
      title: t('services.title_two'),
      description: t('services.text_two'),
    },
    {
      id: 6,
      title: t('services.title_three'),
      description: t('services.text_three'),
    },
  ];

  const swiperRef = React.useRef<any>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <section className="services-wrapper" id="services">
      <div className="services">
        <div className="top-title">
          <h2 className="top-title-h">
            <MdHotelClass className="star" />
            <span dangerouslySetInnerHTML={{ __html: t('business_that') }} />
          </h2>
        </div>

        <div className="grid-data">
          <div className="custom-buttons-swiper">
            <FaAngleLeft className="prev" onClick={handlePrev} />
            <FaAngleRight className="next" onClick={handleNext} />
          </div>
          <Swiper
            ref={swiperRef}
            onSwiper={swiper => (swiperRef.current = swiper)}
            loop
            spaceBetween={24}
            modules={[Autoplay]}
            speed={3800}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              968: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              568: {
                slidesPerView: 1,
              },
            }}
          >
            {Data.map(data => (
              <SwiperSlide key={data.id}>
                <div className="top-texts">
                  <h3>{data.title}</h3>
                  <p style={{ textTransform: lang === 'sr' ? 'unset' : 'capitalize' }}>
                    {data.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
