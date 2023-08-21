import React from "react";

const Recommend = ({ recommend }) => {
  const { name, recipe, price, image } = recommend;
  return (
    <div class="bg-gray-100 w-full h-full flex flex-col">
      <img
        class="w-full h-56 object-cover object-center mb-2"
        src={image}
        alt="content"
      />
      <div className="p-6 flex-grow text-center">
        <h3 class="text-lg text-gray-900 font-medium title-font mb-2">
          {name}
        </h3>
        <p class="leading-relaxed text-base">{recipe}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-gray-300 text-orange-500 border-b-4 border-orange-500 py-4 px-8 text-lg uppercase font-medium hover:bg-black">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Recommend;
