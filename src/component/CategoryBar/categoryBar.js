import React from "react";
import { useState } from "react";
import "./catergoryBar.css";

const CategoryTab = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);
  //console.log("catergoary tab connected")
  return (
    <div className="accordion-item" aria-label= {title}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          className="accordion-content"
          dangerouslySetInnerHTML={{ __html: body }}
          ></div>
      )}
    </div>
  );
};

export default CategoryTab;
