import React from "react";
import popularStyles from "../styles/popular.module.css";

const Popular = ({title}) => {

  
  return (
    <div className={popularStyles.popularContainer}>
      <div className={popularStyles.heading}>{title}</div>
      <div className={popularStyles.items}>
        items
      </div>
    </div>
  )
};

export default Popular