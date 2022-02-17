import React from 'react'
import Avatar from './Avatar'
import portrait from '../images/portrait.jpg'


export default function GridPointsContact({color, rows=20, columns=20}) {

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
      <div 
        className="grid-points-contact"
      >
        {
          Array(columns).fill(0).map((item, i) => <div key={i}>{column()}</div>)
        }
        <div className="grid-points-contact__message">
          <div className="grid-points-contact__message--box">
            <h1>Drop me a note, if this page is of interest to you. <br/>Looking forward to chat!</h1>
          </div>
        </div>
        <div className="grid-points-contact__picture">
            <Avatar
              image={portrait}
            />
        </div>
      </div>
  )
}
