import React from "react";
import { Outlet } from "react-router-dom";
import GridPointsProjects from "./GridPointsProjects";

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="contact__heading">
        <h1 className="heading-1 contact__heading--back">Projects</h1>
        <h1 className="contact__heading--front">Projects</h1>
      </div>
      <div className="projects">
        <div className="projects__names">
          <div className="projects__names--points">
            <GridPointsProjects
              rows={15}
              columns={15}
              color="rgba(255, 255, 255, 0.1)"
            />
          </div>
        </div>
        <div className="projects__description">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
