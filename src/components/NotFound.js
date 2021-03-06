import React from "react";
import errorImage from "../images/logos/error-server.svg";
import { Link } from "react-router-dom";

export default function NotFound({ title, link, backTo, emojin }) {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading not-found__heading--1">{title}</h1>
        <figure className="not-found__figure">
          <img src={errorImage} alt="error404" className="not-found__img" />
        </figure>
        <Link to={link} className="not-found__heading not-found__heading--link">
          <h2 className="not-found__heading not-found__heading--2">
            Back to {backTo} &nbsp;{`=>`} &nbsp;{emojin}
          </h2>
        </Link>
      </div>
    </div>
  );
}
