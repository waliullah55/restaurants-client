import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Call from "./Call";
import Category from "./Category";
import ChecfRecomand from "./ChecfRecomand";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import Cover from './../Shared/Cover';
import bgImg from '../../assets/home/chef-service.jpg';


const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Home </title></Helmet>
            <Banner/>
            <Category/>
            <Cover className="max-h-[300px]" bgImg={bgImg} title="Bistro Boss"/>
            <PopularMenu/>
            <Call/>
            <ChecfRecomand/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;