import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import miss from "../../../assets/menu/miss.png";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      {/* main cover */}
      <div className="mt-20">
        <SectionTitle subHeading={miss} heading={"today's offer"} />
        <MenuCategory items={offered} />
        {/* dessert menu items */}
        <MenuCategory items={desserts} title="dessert" coverImg={dessert} />

        <MenuCategory items={pizzas} title="pizza" coverImg={pizza} />

        <MenuCategory items={salads} title="salad" coverImg={salad} />

        <MenuCategory items={soups} title="soup" coverImg={soup} />

      </div>
    </div>
  );
};

export default Menu;
