import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AddReview from "./AddReview";

export default function StarRating() {
  const [number, setNumber] = useState(0);
  console.log(number);
  const [hoverStar, setHoverStar] = useState(undefined);

  return (
    <div>
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onMouseOver={() => !number && setHoverStar(index + 1)}
            onMouseLeave={() => setHoverStar(undefined)}
            onClick={() => setNumber(index + 1)}
          >
            {number >= index + 1 || hoverStar >= index + 1 ? (
              <AiFillStar size={40} style={{ color: "orange" }} />
            ) : (
              <AiOutlineStar size={40} style={{ color: "orange" }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
