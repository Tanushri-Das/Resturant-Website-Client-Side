import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import check from '../../../assets/home/---Check it out---.png';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <section className='my-20 featured-image bg-fixed text-white pt-20'>
      <SectionTitle subHeading={check} heading={"Featured Items"} />
      <div className='md:flex justify-between items-center py-20 px-20'>
        <div>
          <img src={featured} alt="" />
        </div>
        <div className='md:ml-14'>
          <p className='mb-2 font-bold text-2xl'>{formattedDate}</p>
          <p className='uppercase font-semibold text-xl'>Where can I get some?</p>
          <p className='mb-3 mt-2 text-lg text-justify'>Introducing our exquisite collection of handcrafted delicacies, made with the finest ingredients sourced from around the world. Indulge in the rich flavors and exceptional taste that have made us a favorite among food connoisseurs. Each bite tells a story of passion, artistry, and dedication to culinary perfection. Join us in savoring the extraordinary.</p>
          <button className="btn btn-outline text-white font-medium border-0 border-b-2 border-b-white">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
