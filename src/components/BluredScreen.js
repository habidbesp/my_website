import React from 'react'

export default function BluredScreen({children, displayScreen, setPopup, setPopupImg}) {

    const style = {
        display: displayScreen ? 'flex' : 'none'
    }

    const closePopup = () =>{
        setPopup(false)
        setPopupImg()
    }

    return (
        <div 
            className="blured-screen"
            style={style}
            onClick={closePopup}
        >
            <div className="blured-screen__content">
                {children}
            </div>
        </div>   
    )
}
