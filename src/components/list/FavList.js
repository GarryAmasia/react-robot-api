import React from "react";
import { CustomCard } from "../card/CustomCard";

export const FavList = ({ favList }) => {
  return (
    <div>
      <h4>My Favourite Robot</h4>
      <div className="robot-list">
        {favList.map((nm, i) => {
          return <CustomCard key={i} name={nm} />;
        })}
      </div>
    </div>
  );
};
