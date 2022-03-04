import React from "react";

export default function ButtonFa({ classFa }) {
  const style = {
    borderRadius: "0.6rem",
  };

  return <i className={`${classFa} button-fa`} style={style} />;
}
