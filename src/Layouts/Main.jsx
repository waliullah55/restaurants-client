import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navber from '../Pages/Shared/Navber';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooter || <Navber />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;