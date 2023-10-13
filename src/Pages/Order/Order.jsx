import Cover from './../Shared/Cover';
import bgImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from './../../hooks/useMenu';
import OrderTab from './OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizzas = menu.filter(item => item.category == 'pizza');
    const salads = menu.filter(item => item.category == 'salad');
    const soups = menu.filter(item => item.category == 'soup');
    const drinks = menu.filter(item => item.category == 'drinks');
    return (
        <div>
            <Cover bgImg={bgImg} title='OUR SHOP' />
            <Tabs className='my-8' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
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