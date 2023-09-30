import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import should from "../../../assets/home/---Should Try---.png";
import Recommend from "./Recommend";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Recommends = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: menu = [] } = useQuery(["menu"], async () => {
    const res = await axiosSecure.get("/menu");
    // console.log(res.data);

    return res.data;
  });

  // Filter the menu data to get only the items with category "recommend"
  const recommendItems = menu.filter((item) => item.recommendation === "recommend");
  console.log(recommendItems)

  return (
    <section className="my-20 mx-2 lg:m-20">
      <SectionTitle subHeading={should} heading={"chef recommends"} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {recommendItems.map((recommend) => (
          <Recommend key={recommend._id} recommend={recommend} />
        ))}
      </div>
    </section>
  );
};

export default Recommends;