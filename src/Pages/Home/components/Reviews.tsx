import { FC } from "react";
import ReviewCard from "../../../components/ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
const Reviews: FC = () => {
  const reviews = useSelector(
    (state: RootState) => state.portfolio.data.reviews
  );
  if (!reviews?.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Reviews
      </h1>
      <div className="py-4">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {reviews.map((item: any, i: any) => (
            <SwiperSlide key={i} className="lg:mx-5 md:mx-3 mx-0">
              <ReviewCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
