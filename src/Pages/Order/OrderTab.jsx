import FoodCard from '../../Componenets/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  // const size = 6;
  // const pageCount = Math.ceil(items.length / size);
  // const slices = [...Array(pageCount).keys()];

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(( salad) => (
            <FoodCard key={salad._id} item={salad} />
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
