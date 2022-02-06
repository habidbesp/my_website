import React from 'react'

export default function CardIcon({icon, alt, name, width, fontSize}) {
    const imageStyle = {
        width: width,
    }
    
    const headingStyle = {
        fontSize: fontSize,
        textAlign: "center"
    }

    return (
        <div className="skills__card" style={imageStyle}>
            <figure className="skills__figure">
                <img 
                    src={icon} 
                    alt={alt} 
                    className="skills__image" 
                    
                />
            </figure>
            <h3 
                className="heading-3"
                style={headingStyle}
            >{name}</h3>
        </div>
    )
}
