import { useEffect, useState } from "react";
import SectionTittle from "../../Componenets/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-14">
      <SectionTittle
        Heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTittle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center space-y-3 px-20 py-12">
              <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly/>
              <FaQuoteLeft className="text-5xl font-semibold my-12"/>
              <p className="text-xl text-[#444] text-center">{review.details}</p>
              <h2 className="text-[#CD9003] font-semibold text-3xl">
                {review.name}
              </h2>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
