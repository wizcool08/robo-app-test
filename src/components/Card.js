import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-yellow dib br3 pa3 ma2 shadow-5 bw2 grow">
      <img
        src={`https://robohash.org/${id}`}
        width="200px"
        height="200px"
        alt="robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
