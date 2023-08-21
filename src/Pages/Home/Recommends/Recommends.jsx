import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import should from "../../../assets/home/---Should Try---.png";
import Recommend from "./Recommend";

const Recommends = () => {
    const [recommends,setRecommends]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems=data.filter(item => item.recommendation === 'recommend')
            setRecommends(popularItems)
        })
    },[])
  return (
    <section className="my-20">
      <SectionTitle subHeading={should} heading={"chef recommends"} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                recommends?.map(recommend=><Recommend key={recommend._id} recommend={recommend}/>)
            }
        </div>
      
    </section>
  );
};

export default Recommends;
