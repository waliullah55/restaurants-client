import FoodCard from '../../Componenets/FoodCard';

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((salad) => (
        <FoodCard key={salad._id} item={salad} />
      ))}
    </div>
  );
};

export default OrderTab;
