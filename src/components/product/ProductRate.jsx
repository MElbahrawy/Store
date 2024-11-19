import React, { useEffect, useState } from "react";

export default function ProductRate({ reviews = 0, stars = 0 }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <i className="fas fa-star text-yellow-400"></i>
        ) : stars >= number ? (
          <i className="fas fa-star-half-alt text-yellow-400"></i>
        ) : (
          <i className="far fa-star text-yellow-400"></i>
        )}
      </span>
    );
  });
  return (
    <div className="my-2">
      {tempStars}
      <span className="ms-2">({reviews} customers reviews)</span>
    </div>
  );
}
