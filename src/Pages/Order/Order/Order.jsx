import { useState } from "react";
import Cover from "../../../Components/Shared/Cover/Cover";
import orderbg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import './Order.css';
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['Salad', 'Pizza', 'Pasta', 'Soup', 'Burger', 'Dessert', 'Fish', 'Chicken'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log("Category:", category);
console.log("Initial Index:", initialIndex);
console.log("Tab Index:", tabIndex);


  const desserts = menu.filter((item) => item.category === "Dessert");
  const pizzas = menu.filter((item) => item.category === "Pizza");
  const pastas = menu.filter((item) => item.category === "Pasta");
  const soups = menu.filter((item) => item.category === "Soup");
  const burgers = menu.filter((item) => item.category === "Burger");
  const salads = menu.filter((item) => item.category === "Salad");
  const fishs = menu.filter((item) => item.category === "Fish");
  const chickens = menu.filter((item) => item.category === "Chicken");

  return (
    <div>
      <Helmet>
        <title>Foodie's Paradise | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={orderbg}
        title="Order Food"
        description="Would you like to try a dish"
      />
      <div className="my-20 mx-2 lg:m-20">
        <Tabs defaultIndex={initialIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>PASTA</Tab>
            <Tab>SOUP</Tab>
            <Tab>Burger</Tab>
            <Tab>Fish</Tab>
            <Tab>Chicken</Tab>
            <Tab>DESSERTS</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pastas} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={burgers} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={fishs} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={chickens} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;



