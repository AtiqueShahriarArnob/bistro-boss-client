import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import UseMenu from "../../Hooks/UseMenu";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";

const Menu = () => {
    const [menu] = UseMenu();


    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>


            <Cover img={menuImg} title="OUR MENU" />


            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            />

            <MenuCategory items={offered} />


            <MenuCategory items={dessert} title={"dessert"} img={dessertImg} />
            <MenuCategory items={soup} title={"soup"} img={soupImg} />
            <MenuCategory items={salad} title={"salad"} img={saladImg} />
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
        </div>
    );
};

export default Menu;
