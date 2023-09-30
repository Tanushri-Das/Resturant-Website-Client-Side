// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import banner1 from '../../../assets/home/01.jpg';
// import banner2 from '../../../assets/home/02.jpg';
// import banner3 from '../../../assets/home/03.png';
// import banner4 from '../../../assets/home/04.jpg';
// import banner5 from '../../../assets/home/05.png';
// import banner6 from '../../../assets/home/06.png';
// import '../Banner/Banner.css'

// const Banner = () => {
//   return (
//     <Carousel autoPlay infiniteLoop>
//       <div>
//         <img src={banner1} />
//       </div>
//       <div>
//         <img src={banner2} />
//       </div>
//       <div>
//         <img src={banner3} />
//       </div>
//       <div>
//         <img src={banner4} />
//       </div>
//       <div>
//         <img src={banner5} />
//       </div>
//       <div>
//         <img src={banner6} />
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../../assets/home/01.jpg';
import banner2 from '../../../assets/home/02.jpg';
import banner3 from '../../../assets/home/03.png';
import banner4 from '../../../assets/home/04.jpg';
import banner5 from '../../../assets/home/05.png';
import banner6 from '../../../assets/home/06.png';
import '../Banner/Banner.css';
import CustomSpinner from "../../../Components/CustomSpinner/CustomSpinner";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting loading to false after a delay (e.g., 1 millisecond)
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <div className="banner-container">
      {loading ? (
        <CustomSpinner /> // Show the spinner while loading
      ) : (
        <Carousel autoPlay infiniteLoop>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" />
          </div>
          <div>
            <img src={banner4} alt="Banner 4" />
          </div>
          <div>
            <img src={banner5} alt="Banner 5" />
          </div>
          <div>
            <img src={banner6} alt="Banner 6" />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
