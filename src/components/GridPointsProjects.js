import React from 'react'
import { NavLink } from 'react-router-dom';
import { projectsData } from '../helpers'


export default function GridPointsProjects({color, rows=20, columns=20}) {

    const style = {
        width: "3rem", 
        height: "3rem", 
        color,
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        }

    const column = () => {
        return [...Array(rows).fill("•")].map((item, i) => (
        <div 
          key={i} 
          style={style}
        >
          {item}
        </div>
        ));
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
    return (
        <div className="grid-points-projects">
            {
                Array(columns).fill(0).map((item, i) => <div key={i}>{column()}</div>)
            }
            <div className="grid-points-projects__back">
                <ul className="grid-points-projects__list">
                    {
                        projectsData.map(item => (
                            <li className="grid-points-projects__item" key={item.id} onClick={scrollToTop}>
                                <NavLink 
                                    to={`${item.id}`} 
                                    className={ ({isActive}) => (isActive ? "active-project" : "inactive")}
                                >
                                    <h3 className="heading-3 heading-3--light">{item.title}</h3>
                                    <h4 className="grid-points-projects__sentence">{item.sentence}</h4>
                                </NavLink>
                            </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>    
    )
}
