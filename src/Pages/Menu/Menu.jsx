import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import bgImg from '../../assets/menu/banner3.jpg';
import MenuCategory from './MenuCategory';
import useMenu from './../../hooks/useMenu';
import SectionTittle from './../../Componenets/SectionTittle';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import salsadImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';


const Menu = () => {
    const [menu] = useMenu();
    const offers = menu.filter(item => item.category == 'offered');
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizzas = menu.filter(item => item.category == 'pizza');
    const salads = menu.filter(item => item.category == 'salad');
    const soups = menu.filter(item => item.category == 'soup');
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu </title></Helmet>
            <Cover bgImg={bgImg} title='OUR MENU' />
            <SectionTittle subHeading={"Don't miss"} Heading="TODAY'S OFFER" />
            <MenuCategory items={offers} btnTitle='ORDER YOUR FAVOURITE FOOD' />
            <MenuCategory items={desserts} btnTitle='ORDER YOUR FAVOURITE Dessert' title='DESSERTS' bgImg={dessertImg} />
            <MenuCategory items={pizzas} btnTitle='ORDER YOUR FAVOURITE Pizza' title='PIZZA' bgImg={pizzaImg} />
            <MenuCategory items={salads} btnTitle='ORDER YOUR FAVOURITE Salad' title='SALADS' bgImg={salsadImg} />
            <MenuCategory items={soups} btnTitle='ORDER YOUR FAVOURITE Soup' title='SOUPS' bgImg={soupImg} />
        </div>
    );
};

export default Menu;