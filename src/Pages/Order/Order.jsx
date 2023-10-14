import Cover from './../Shared/Cover';
import bgImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from './../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category == 'dessert');
    const pizzas = menu.filter(item => item.category == 'pizza');
    const salads = menu.filter(item => item.category == 'salad');
    const soups = menu.filter(item => item.category == 'soup');
    const drinks = menu.filter(item => item.category == 'drinks');
    return (
        <div>
            <Helmet><title>Bistro Boss | Order</title> </Helmet>
            <Cover bgImg={bgImg} title='OUR SHOP' />
            <Tabs className='my-8 text-center' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'mb-6 mt-12'}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><OrderTab items={salads} /></TabPanel>
                <TabPanel><OrderTab items={pizzas} /></TabPanel>
                <TabPanel><OrderTab items={soups} /></TabPanel>
                <TabPanel><OrderTab items={desserts} /></TabPanel>
                <TabPanel><OrderTab items={drinks} /></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;