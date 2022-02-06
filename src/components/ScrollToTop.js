import React from 'react'
import ButtonFa from './ButtonFa'

export default function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
        <div 
            onClick={scrollToTop} 
        >
          <ButtonFa
              classFa="fas fa-arrow-up"
          />
        </div>
    )
}
