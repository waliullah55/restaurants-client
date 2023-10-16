import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart',
              showConfirmButton: false,
              timer: 1000
            })
          }
        })
    } else {
      Swal.fire({
        title: 'Login fo order',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      })
    }
  }
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
          <button onClick={() => handleAddToCart(item)} className=" btn bg-[#E8E8E8] w-[200px] border-b-[#BB8506] border-b-4 text-[#BB8506] text-xl font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
