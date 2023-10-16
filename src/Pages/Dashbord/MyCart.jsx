import { Helmet } from "react-helmet-async";
import useCart from './../../hooks/useCart';
import { BiTrash } from 'react-icons/bi';
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((accu, item) => item.price + accu, 0);
    console.log(cart);
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet><title>Bistro Boss | My Cart</title></Helmet>
            <div>
                <div className="text-3xl font-semibold flex justify-between uppercase my-9">
                    <h1>total order : {cart.length}</h1>
                    <h1>total Price : ${totalPrice}</h1>
                    <button className="btn btn-sm">Pay</button>
                </div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead className=" py-6">
                            <tr className=" bg-[#D1A054] text-white">
                                <th># </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <td> {index + 1} </td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-end mr-12"> ${item.price}</td>
                                    <td><button onClick={() => handleDelete(item._id)} className="btn btn-ghost bg-[#B91C1C] text-xl text-white"><BiTrash /> </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;