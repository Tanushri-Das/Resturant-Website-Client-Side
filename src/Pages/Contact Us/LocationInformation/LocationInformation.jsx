import React from "react";
import visit from "../../../assets/contact/visit us.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineWatchLater } from "react-icons/md";

import "./LocationInformation.css";

const LocationInformation = () => {
  return (
    <div className="mt-20 mb-36">
      <SectionTitle subHeading={visit} heading={"OUR LOCATION"} />
      <div className="mt-10 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="phone">
            <div className="phone-div w-full flex items-center justify-center">
              <FaPhoneAlt className="text-white text-lg" />
            </div>

            <div className="p-6">
              <div className="border phone-text py-9 h-40">
                <h4 className="text-2xl font-medium  text-center mb-1">
                  PHONE
                </h4>
                <p className="text-[16px] text-center inform-text">
                  +38 (012) 34 56 789
                </p>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-div w-full flex items-center justify-center">
              <MdOutlineLocationOn className="text-white text-2xl" />
            </div>

            <div className="p-6">
              <div className="border phone-text py-9 h-40">
                <h4 className="text-2xl font-medium  text-center mb-1">
                  ADDRESS
                </h4>
                <p className="text-[16px] text-center inform-text">
                  +38 (012) 34 56 789
                </p>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-div w-full flex items-center justify-center">
              <MdOutlineWatchLater className="text-white text-2xl" />
            </div>

            <div className="p-6">
              <div className="border phone-text py-9 h-40">
                <h4 className="text-2xl font-medium  text-center mb-1">
                  WORKING HOURS
                </h4>
                <p className="text-[16px] text-center inform-text">
                  Mon - Fri: 08:00 - 22:00 <br />
                  Sat - Sun: 10:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
