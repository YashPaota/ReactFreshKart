import React from 'react';
import finalStyles from "../styles/final.module.css";

const Final = () => {
  return (
    <div className={finalStyles.finalContainer}>
        <div className={finalStyles.message} >You have placed the order.</div>
    </div>
  )
}

export default Final;