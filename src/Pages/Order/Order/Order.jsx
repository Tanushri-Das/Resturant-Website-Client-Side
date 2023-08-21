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
  const categories=['salad','pizza','soup','dessert','drink'];
  const {category}=useParams();
  const initialIndex=categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
//   const {category}=useParams();
//   console.log(category)
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={orderbg}
        title="Order Food"
        description="Would you like to try a dish"
      />
      <div className="my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas} />
          </TabPanel>
          <TabPanel>
          <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
          <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
