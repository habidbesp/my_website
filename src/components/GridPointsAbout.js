import React from 'react'
import nordKapp from '../images/nord-kapp.jpeg'
import Avatar from './Avatar'

export default function GridPointsAbout({color, rows=20, columns=20}) {

    const style = {
        width: "3rem", 
        height: "3rem", 
        color,
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
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

    return (
        <div className="grid-points-about">
            {
          Array(columns).fill(0).map((item, i) => <div key={i}>{column()}</div>)
            }
            <div className="grid-points-about__message">
                <div className="grid-points-contact__message--box">
                    <h1>Have a look at my story and my skills!</h1>
                </div>
            </div>
            <figure className="grid-points-about__picture">
                <Avatar 
                    image={nordKapp}
                />
            </figure>
        </div>
    )
}
