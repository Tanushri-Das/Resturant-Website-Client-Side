import React from 'react';
import service from '../../../assets/home/chef-service.jpg';
import './About.css'; // Import the external CSS file

const About = () => {
  return (
    <div className="container my-20">
      <img src={service} alt="" className="styled-image" />
      <div className="overlay">
        <h3 className="text-2xl uppercase mb-4 text-center font-medium">bisto boss</h3>
        <p className="paragraph">
          Welcome to Bisto Boss, a charming restaurant located in the heart of the city. At Bisto Boss, we take pride in serving you the finest cuisines made with love and passion. Our chefs, with their years of experience, ensure that each dish is a delightful experience for your taste buds.
          {/* <br />
          <br />
          Whether you're looking for a hearty breakfast, a quick lunch, or a romantic dinner, Bisto Boss has got you covered. From mouthwatering starters to delectable desserts, our menu offers a diverse range of flavors to satisfy your cravings.
          <br />
          <br />
          Our cozy ambiance and excellent service complement our delectable dishes, making your dining experience unforgettable. So, come and indulge yourself in the culinary delights that Bisto Boss has to offer! */}
        </p>
      </div>
    </div>
  );
};

export default About;
