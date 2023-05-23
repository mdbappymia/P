import { FC } from "react";
import reviews from "../../../assets/data/reviews.json";
import ReviewCard from "../../../components/ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Reviews: FC = () => {
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Reviews
      </h1>
      <div className=" py-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          autoplay={{ delay: 500 }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
        >
          {reviews.map((item: any, i: any) => (
            <SwiperSlide key={i}>
              <ReviewCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
