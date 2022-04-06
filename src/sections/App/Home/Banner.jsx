import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Pagination } from "swiper";

export default function BannerComp() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        navigation={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            style={{
              borderRadius: "7px",
            }}
            src="https://ik.imagekit.io/sarrahman/sarrahman__1__cPpuhBMuf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648564952128"
            width={"100%"}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              borderRadius: "7px",
            }}
            src="https://ik.imagekit.io/sarrahman/sarrahman_wsaNh7W13.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648564952401"
            width={"100%"}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
