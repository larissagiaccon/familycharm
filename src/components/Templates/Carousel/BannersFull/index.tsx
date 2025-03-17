import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import BannerItem from '../../BannerItem';

import * as S from './styles';

interface IBannersFullProps {
  banners: any;
}

export default function BannersFull({ banners }: IBannersFullProps) {
  const swiperRef = useRef(null);

  const [delay, setDelay] = useState(
    banners?.length > 0 ? banners[0].duracao : 0,
  );

  const sortedBanners = [...banners].sort((a, b) => a.ordem - b.ordem);

  return (
    <S.Container className="banners-full">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay,
        }}
        pagination={{ clickable: banners.length > 1 }}
        loop={true}
        effect="fade"
        navigation={banners.length > 1}
        speed={1000}
        onSlideChange={swiper => setDelay(banners[swiper.realIndex].duracao)}
      >
        {sortedBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <BannerItem banner={banner} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
