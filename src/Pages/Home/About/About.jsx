// import React from 'react';
// import service from '../../../assets/home/chef-service.jpg';
// import './About.css'; // Import the external CSS file

// const About = () => {
//   return (
//     <div className="container my-20">
//       <img src={service} alt="" className="styled-image" />
//       <div className="overlay">
//         <h3 className="text-2xl uppercase mb-4 text-center font-medium">bisto boss</h3>
//         <p className="paragraph">
//           Welcome to Bisto Boss, a charming restaurant located in the heart of the city. At Bisto Boss, we take pride in serving you the finest cuisines made with love and passion. Our chefs, with their years of experience, ensure that each dish is a delightful experience for your taste buds.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import check from "../../../assets/home/---Check it out---.png";
import featured from "../../../assets/home/featured.jpg";
import "./About.css";

const Featured = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <section className="my-20 w-full about-image bg-fixed text-white py-40 flex flex-col items-center justify-center">
      <h3 className="text-2xl uppercase mb-4 text-center font-medium">bisto boss</h3>
      <div className="paragraph">
        <p className="mb-3 mt-2 text-lg text-center mx-2 lg:mx-0">
          Welcome to Bisto Boss, a charming restaurant located in the heart of
          the city. At Bisto Boss, we take pride in serving you the finest
          cuisines made with love and passion. Our chefs, with their years of
          experience, ensure that each dish is a delightful experience for your
          taste buds.
        </p>
      </div>
    </section>
  );
};

export default Featured;

