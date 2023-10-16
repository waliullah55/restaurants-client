import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidShoppingBag } from 'react-icons/bi';
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to dynamic
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col px-14 justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] ">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add An Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Booking</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashbord/myCart" className='flex'><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary ">+{cart?.length || 0}</span>
                            </NavLink> </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"><GiHamburgerMenu /> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"> <BiSolidShoppingBag /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;