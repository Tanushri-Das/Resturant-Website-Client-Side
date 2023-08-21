import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div>
      <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={image}
          />
          <div class="flex-grow">
            <div className="flex justify-between items-center mb-2">
              <h2 class="text-gray-900 title-font text-xl font-medium uppercase">
                {name}
              </h2>
              <h2 class="text-orange-400 text-lg title-font font-medium">
                ${price}
              </h2>
            </div>

            <p class="text-gray-500">{recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
