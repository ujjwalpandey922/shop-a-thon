import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Rating.css";
function Rating({ rating, onClick, style }) {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rating > index ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
