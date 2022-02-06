import React from 'react'
import homeImage from "../images/land-scape.jpg"
import GridPoints from "./GridPoints"
import ButtonFa from './ButtonFa'

export default function Home() {
    return (
        <div className="home">
            <div className="home__box home__box--headings">
                <div>
                    <h1 className="heading-1 heading-1--bold">Habid Badillo</h1>
                    <h2 className="heading-3 heading-3--light">Full Stack Web Developer</h2>
                </div>
                <ul className="home__icons">
                    <li>
                        <a href={`mailto: ${process.env.REACT_APP_EMAIL}`}>
                            <ButtonFa
                                classFa="fas fa-at"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/habidbesp" target="_blank" rel="noreferrer">
                            <ButtonFa
                                classFa="fab fa-github"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/habidbadillo/" target="_blank" rel="noreferrer">
                            <ButtonFa
                                classFa="fab fa-linkedin-in"
                            />
                        </a>
                    </li>  
                </ul>
            </div>
            <div className="home__box home__box--image">
                <div className="home__points-container">
                    <div className="home__points">
                        <GridPoints
                            rows={13}
                            columns={18}
                            color="rgba(255, 255, 255, 0.2)"
                        />
                    </div>
                    <figure className="home__figure">
                        <img src={homeImage} alt="hero" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
