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
import pasta from "../../../assets/menu/pasta.jpg";
import burger from "../../../assets/menu/burger.webp";
import MenuCategory from "../MenuCategory/MenuCategory";
import fish from "../../../assets/menu/fish-cutlet.jpg";
import chicken from "../../../assets/menu/chicken.jpg";
import OfferedItems from "../OfferedItems/OfferedItems";
import { Link } from "react-router-dom";

const Menu = () => {
  
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "Dessert");
  const pizzas = menu.filter((item) => item.category === "Pizza");
  const pastas = menu.filter((item) => item.category === "Pasta");
  const soups = menu.filter((item) => item.category === "Soup");
  const burgers = menu.filter((item) => item.category === "Burger");
  const salads = menu.filter((item) => item.category === "Salad");
  const fishs = menu.filter((item) => item.category === "Fish");
  const chickens = menu.filter((item) => item.category === "Chicken");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Foodie's Paradise | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      {/* main cover */}
      <div className="mt-20">
        <SectionTitle subHeading={miss} heading={"today's offer"} />
        <OfferedItems/>
        {/* <MenuCategory items={offered} /> */}

        <MenuCategory items={pizzas} title="pizza" coverImg={pizza} />

        <MenuCategory items={burgers} title="burger" coverImg={burger} />

        <MenuCategory items={pastas} title="pasta" coverImg={pasta} />

        <MenuCategory items={salads} title="salad" coverImg={salad} />

        <MenuCategory items={fishs} title="fish" coverImg={fish} />

        <MenuCategory items={chickens} title="chicken" coverImg={chicken} />

        <MenuCategory items={soups} title="soup" coverImg={soup} />

        <MenuCategory items={desserts} title="dessert" coverImg={dessert} />
        <div className="flex justify-center items-center">
        <Link to='/order'>
          <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10">
            Order your favourite food
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Menu;
