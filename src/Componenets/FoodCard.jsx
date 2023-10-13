const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div className="relative rounded-none dark:bg-gray-900 dark:text-gray-100">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-72 dark:bg-gray-500"
        />
        <p className="absolute top-5 right-5 bg-black text-white w-fit text-center py-3 px-5 font-semibold">${price}</p>
        <div className="flex flex-col justify-center items-center p-6 space-y-8 bg-[#F3F3F3]">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracki">{name}</h2>
            <p className="dark:text-gray-100">
             {recipe}
            </p>
          </div>
          <button className=" btn bg-[#E8E8E8] w-[200px] border-b-[#BB8506] border-b-4 text-[#BB8506] text-xl font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
