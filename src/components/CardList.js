import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  console.log("CardList");
  return (
    <div className="list-items">
      {robots.map((robot, i) => {
        return (
          <Card className='robot' key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
