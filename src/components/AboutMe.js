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
                         I am originally from Mexico and trained as a ballet dancer there. My professional dance career took me to Germany 12 years ago where I have worked at several theaters across the country. My life and career as a dancer has taught me valuable cooperation and team skills in addition to promoting attributes such as discipline and perseverance. I also learned early on to deal with fundamental questions about my further professional development, since dance, as fulfilling as it is, is not a profession that can be practiced for a lifetime. A little over a year ago, when I was asked whether I could only dance or develop myself in other professional fields, I finally wanted to start with something new that would grab my attention and enthusiasm in equal measure. As a result and parallel to my dance career, I developed a great interest in programming web applications. In October 2020 I completed a 9-week web development bootcamp at Ironhack Berlin, which I really liked and which motivated me to develop further in this area.
                        </p>

                        <p>
                        At Ironhack Berlin I was able to gain initial knowledge in the field of web development. At first I found it all quite complex and challenging; But that's exactly what attracted me to delve deeper and expand my knowledge. At the end of this bootcamp, I therefore decided to take another step in the direction of web development and started a one-year full-time apprenticeship at the DCI Digital Career Institute gGmbH in Berlin, which I now completed on December 4th 2021.
                        </p>

                        <p>
                        I am polishing my React skills right now with some projects, this website being one of them!
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
