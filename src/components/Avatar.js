import React from 'react'


export default function Avatar({image}) {
    return (
        <div className="avatar">
            <img src={image} alt="Circle" />
        </div>
    )
}
