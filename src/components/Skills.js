import React from "react";
import CardIcon from "./CardIcon";
import { dataSkills } from "../helpers";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__logos-container">
        {dataSkills.map((item, i) =>
          item.learned ? (
            <div className="skills__row" key={i}>
              <CardIcon
                icon={item.image}
                alt={item.alt}
                name={item.name}
                width="100%"
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h2>Currently Learning :</h2>
      <div className="skills__logos-container">
        {dataSkills.map((item, i) =>
          !item.learned ? (
            <div key={i} className="skills__row">
              <CardIcon
                icon={item.image}
                alt={item.alt}
                name={item.name}
                width="100%"
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
