import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTittle from "../../Componenets/SectionTittle";

const Category = () => {
  return (
    <div>
        <SectionTittle Heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTittle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16 mt-8"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h2 className="font-medium text-4xl text-white text-center -mt-24 shadow-xl uppercase">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h2 className="font-medium text-4xl text-white text-center -mt-24 shadow-xl uppercase">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h2 className="font-medium text-4xl text-white text-center -mt-24 shadow-xl uppercase">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h2 className="font-medium text-4xl text-white text-center -mt-24 shadow-xl uppercase">Dizzart</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h2 className="font-medium text-4xl text-white text-center -mt-24 shadow-xl uppercase">Salad</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
