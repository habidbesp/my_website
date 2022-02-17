import React from 'react'
import GridPointsAbout from './GridPointsAbout'
import Skills from './Skills'
import ScrollToTop from './ScrollToTop'

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
                         I am originally from Mexico and trained as a professional ballet dancer. My professional dance career took me to Germany 12 years ago where I have worked at several theaters across the country. My life and career as a dancer has taught me valuable skills such as having a genuine collaborative spirit in addition to attributes such as discipline, perseverance and good work ethics. 
                         </p>

                         <p>
                         Some time ago, I decided to start with something new, something that I could equally be passionate and enthusiastic about. Parallel to my dance career, I therefore evolved on my interest in programming web applications. In October 2020 I completed a 9-week web development bootcamp at Ironhack Berlin, which I enjoyed, and which encouraged me to develop myself further in this area.
                        </p>

                        <p>
                        At Ironhack Berlin I was able to gain initial knowledge in the field of web development. I learned fast that all was quite complex and challenging, but that's exactly what attracted me to go even deeper and expand my knowledge and skills. At the end of the bootcamp, I decided to take another step in the direction of web development and started a one-year full-time apprenticeship at the DCI Digital Career Institute gGmbH in Berlin, which I just now completed on December 4th 2021.
                        </p>

                        <p>
                        I am polishing my React skills right now with some projects, this website you are looking at being one of them!
                        </p>
                    </div>
                    <Skills />
                    <div className="about-me__footer">
                        <ScrollToTop />
                    </div>
                </div>
            </div>
        </div>
    )
}
