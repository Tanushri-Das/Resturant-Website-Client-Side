// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import check from "../../../assets/home/---Check it out---.png";
// import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";
// import { Link } from "react-router-dom";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const PopularMenu = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { data: menu = [] } = useQuery(["menu"], async () => {
//     const res = await axiosSecure.get("/menu");
//     // console.log(res.data);

//     return res.data;
//   });

//   // Filter the menu data to get only the items with category "popular"
//   const popularItems = menu.filter((item) => item.category === "popular");
//   console.log(popularItems)

//   return (
//     <section className="mx-20">
//       <SectionTitle subHeading={check} heading={"from our menu"} />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-10">
//         {popularItems.map((item) => (
//           <MenuItem key={item._id} item={item} />
//         ))}
//       </div>
//       <div className="flex justify-center items-center">
//         <Link to="/menu">
//           <button className="btn btn-outline border-0 border-b-4 mt-4">
//             View Full Menu
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default PopularMenu;


import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import check from "../../../assets/home/---Check it out---.png";
import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularMenu = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: menu = [] } = useQuery(["menu"], async () => {
    const res = await axiosSecure.get("/menu");
    return res.data;
  });

  // Filter the menu data to get only the items with category "popular"
  const popularItems = menu.filter((item) => item.popularism === "Popular");

  return (
    <section className="sm:mx-20">
      <SectionTitle subHeading={check} heading={"from our menu"} />
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2  gap-3 my-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/menu">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;

