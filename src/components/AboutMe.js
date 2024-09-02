import React from "react";
import GridPointsAbout from "./GridPointsAbout";
import Skills from "./Skills";
import ScrollToTop from "./ScrollToTop";

export default function AboutMe() {
  return (
    <div className="wrapper">
      <div className="contact__heading">
        <h1 className="heading-1 contact__heading--back">About Me</h1>
        <h1 className="contact__heading--front">About Me</h1>
      </div>
      <div className="about-me">
        <div className="about-me__picture">
          <div className="about-me__points">
            <GridPointsAbout
              rows={15}
              columns={15}
              color="rgba(255, 255, 255, 0.1)"
            />
          </div>
        </div>
        <div className="about-me__story">
          <div className="about-me__text">
            <h1>My Story</h1>
            <p>
              I'm originally from Mexico and completed a specialized program in
              classical dance performance at the National School of Classical
              and Contemporary Dance in Mexico City. Additionally, I pursued
              further education in neoclassical ballet at Theater Basel in
              Switzerland. My professional dance career brought me to Germany 15
              years ago, where I have worked at several theaters across the
              country, including the Friedrichstadt-Palast in Berlin, and on a
              luxury cruise ship, where I was hired as both a dancer and a
              member of the crew, entertaining the guests. My life and career as
              a dancer have taught me valuable skills, such as a genuine
              collaborative spirit, as well as attributes like discipline,
              perseverance, and a strong work ethic.
            </p>

            <p>
              Some time ago, I decided to embark on a new path—one that I could
              be equally passionate and enthusiastic about. Alongside my dance
              career, I developed an interest in programming web applications.
              In October 2020, I completed a 9-week web development bootcamp at
              Ironhack Berlin, which I thoroughly enjoyed and which motivated me
              to further develop my skills in this field.
            </p>

            <p>
              At Ironhack Berlin, I gained foundational knowledge in web
              development, where I primarily learned the MERN stack technology.
              I quickly realized how complex and challenging the field could be,
              but this was precisely what motivated me to delve deeper and
              expand my skills. Upon completing the bootcamp, I decided to
              further pursue web development by embarking on a one-year
              full-time apprenticeship at DCI Digital Career Institute GmbH in
              Berlin. During this time, I had the opportunity to work on various
              small projects, both individually and as part of a team, which
              allowed me to exercise and enhance my web development skills. I
              successfully completed the apprenticeship in February 2022.
            </p>

            <p>
              After finishing my education at DCI, I continued to explore new
              technologies and apply them to personal projects. This website you
              are visiting is one such example.
            </p>
          </div>
          <Skills />
          <div className="about-me__footer">
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
}
