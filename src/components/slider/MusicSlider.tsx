import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCardOne from "../Cards/SliderCardOne";
import SliderCardTwo from "../Cards/SliderCardTwo";

const MusicSlider = ({
  spLarge,
  spMedium,
  spSmall,
  type,
  title,
  list,
}: any) => {
  return (
    <div className={`mt-4 ${type === 1 ? "versionOne" : "versionTwo"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="heading-secondary my-3">{title}</h2>
        <p className={`text-small ${type === 1 ? "d-none" : "d-block"}`}>
          See All
        </p>
      </div>

      <Swiper
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: spSmall,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: spMedium,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: spLarge,
            spaceBetween: 16,
          },
        }}
        modules={[Navigation]}
      >
        {list.map((item: any) => (
          <SwiperSlide key={item?.id}>
            {type === 1 ? (
              <SliderCardOne image={item?.bg} title={item?.title} />
            ) : (
              <SliderCardTwo
                image={item?.image}
                title={item?.title}
                artist={item?.artist}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MusicSlider;