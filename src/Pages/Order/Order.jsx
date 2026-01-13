import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ["salad", "pizza", "soup", "drinks", "dessert"];
    const { category } = useParams();

    const initialIndex = categories.indexOf(category || "salad");
    const [tabIndex, setTabIndex] = useState(
        initialIndex === -1 ? 0 : initialIndex
    );

    const [menu] = UseMenu();

    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");
    const dessert = menu.filter(item => item.category === "dessert");

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>

            <Cover img={orderCoverImg} title="Order Food" />

            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className="mt-10 p-5"
            >
                <TabList className="flex justify-center gap-6 font-semibold text-lg">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Dessert</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 p-6">
                        {salad.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 p-6">
                        {pizza.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 p-6">
                        {soup.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 p-6">
                        {drinks.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 p-6">
                        {dessert.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
