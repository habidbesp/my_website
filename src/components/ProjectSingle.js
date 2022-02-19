import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData  } from '../helpers'
import ButtonFa from './ButtonFa'
import CardIcon from './CardIcon'
import ScrollToTop from './ScrollToTop'
import BluredScreen from './BluredScreen'
import NotFound from './NotFound'



export default function ProjectSingle() {

    const [ popup, setPopup ] = useState(false)
    const [ popupImg, setPopupImg ] = useState()

    const { projectId } = useParams()
    
    const targetObj = projectsData.find(item => item.id === projectId);

    if(!targetObj){
        return <NotFound 
            title={'No Project Found!!!'}
            link={'/projects'}     
            backTo={'Projects'}
            emojin={'👩🏻‍💻'}
        />
    }

    const { title, sentence, demoLink, githubLink, technologies, features } = targetObj

    const displayPopup = (e) => {
        setPopupImg(e.target.id)
        setPopup(true) 
    }

    

    return (
        <>
        <BluredScreen
                    displayScreen={popup}
                    setPopup={setPopup}
                    setPopupImg={setPopupImg}
                >
                <img src={popupImg} alt="project" />
        </BluredScreen>

        <div className="project-single">
            
            <div className="project-single__head">
                <div className="contact__heading">
                    <h1 className="heading-1 contact__heading--back">{title}</h1>
                    <h1 className="contact__heading--front">{title}</h1>
                    <h4 className="grid-points-projects__sentence project-single__head--subheading">{sentence}</h4>
                </div>
                <ul className="project-single__list">
                    <li className="project-single__item">
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <ButtonFa 
                                classFa={"fab fa-github"}
                            />
                        </a>
                    </li>
                    <li className="project-single__item">
                        <a href={demoLink} target="_blank" rel="noreferrer">
                            <ButtonFa 
                                classFa={"fas fa-link"}
                            />
                        </a>
                    </li>
                </ul>
            </div>

            

            <div className="project-single__technologies">
                <h1 className="heading-back">Tools & Technologies</h1>
                {
                    technologies.map((item, i) => (
                        <div className="project-single__technologies--row" key={i}>
                            <CardIcon 
                                icon={item.image}
                                alt={item.alt}
                                name={item.name}
                                width="100%"
                                fontSize="1.2rem"
                            />
                        </div>  
                    )
                )
                }
            </div>

            <div className="project-single__body">
                <h1 className="heading-back">Feautures</h1>
                {
                    features.map((item, i) => (
                        <div  className="project-single__card" key={i}>
                            <figure onClick={displayPopup}>
                                <img 
                                    src={item.image} 
                                    alt={item.alt} 
                                    className="project-single__img"
                                    id={item.image}
                                />
                                <figcaption id={item.image} className="project-single__caption">
                                    Click Me!
                                </figcaption>
                            </figure>
                            <div className="project-single__text">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="project-single__footer">
                    <ul className="project-single__list">
                        <li className="project-single__item">
                            <a href={githubLink} target="_blank" rel="noreferrer">
                                <ButtonFa 
                                    classFa={"fab fa-github"}
                                />
                            </a>
                        </li>
                        <li className="project-single__item">
                            <a href={demoLink} target="_blank" rel="noreferrer">
                                <ButtonFa 
                                    classFa={"fas fa-link"}
                                />
                            </a>
                        </li>
                        <li className="project-single__item">
                            <ScrollToTop /> 
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
        </>
    )
}
