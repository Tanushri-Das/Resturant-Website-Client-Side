// import React from "react";
// import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";
// import Cover from "../../../Components/Shared/Cover/Cover";
// import { Link } from "react-router-dom";

// const MenuCategory = ({ items, title, coverImg }) => {
//   return (
//     <div className="">
//       {title && <Cover img={coverImg} title={title} />}
//       <div className="grid grid-cols-2 gap-3 my-10">
//         {items?.map((item) => (
//           <MenuItem key={item._id} item={item} />
//         ))}
//       </div>
//       <div className="flex justify-center items-center">
//         <Link to={`/order/${title}`}>
//           <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10">
//             Order your favourite food
//           </button>
//         </Link>
//         {/* <Link to='/order'>
//           <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10">
//             Order your favourite food
//           </button>
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default MenuCategory;


import React from "react";
import MenuItem from "../../../Components/Shared/MenuItem/MenuItem";
import Cover from "../../../Components/Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  // Define the URL based on the title prop or use a default URL
  const orderUrl = title ? `/order/${title}` : "/order";

  return (
    <div className="lg:mx-20">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 my-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      
    </div>
  );
};

export default MenuCategory;
