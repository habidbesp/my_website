import React, { useState, useEffect } from 'react'

export default function GridPoints({color, rows=25, columns=25}) {

  const [ numberOfRows, setNumberOfRows ] = useState(rows)
  const [ numberOfColumns, setNumberOfColumns ] = useState(columns)
  
   useEffect(() => { 
     updateDimensions();
     window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);
       // eslint-disable-next-line
    }, [])

    const updateDimensions = () => {
      const { innerWidth } = window
      
      // console.log(innerWidth);
    
      if(innerWidth >= 1800){
        setNumberOfColumns(columns + 2)
        setNumberOfRows(rows + 2)
        return
      }

      if(innerWidth >= 1440){
        setNumberOfColumns(columns)
        setNumberOfRows(rows)
        return
      }




      if(innerWidth <= 700){
        setNumberOfRows(rows -5 )
        setNumberOfColumns(columns -7)
        return
      }

      if(innerWidth <= 800){
        setNumberOfRows(rows -4 )
        setNumberOfColumns(columns -6)
        return
      }

      if(innerWidth <= 900){
        setNumberOfRows(rows -2 )
        setNumberOfColumns(columns -4)
        return
      }

      if(innerWidth <= 1000){
        setNumberOfRows(rows -2 )
        setNumberOfColumns(columns -3)
        return
      }

      if(innerWidth <= 1060){
        setNumberOfRows(rows -1 )
        setNumberOfColumns(columns -1)
        return
      }

      if(innerWidth <= 1190){
        setNumberOfRows(rows  )
        setNumberOfColumns(columns )
        return
      }

      if(innerWidth <= 1279){
        setNumberOfRows(rows -2 )
        setNumberOfColumns(columns - 2)
        return
      }

      if(innerWidth <= 1439){
        setNumberOfRows(rows - 1)
        setNumberOfColumns(columns - 1)
        return
      }
    }

    const style = {
        width: "3rem", 
        height: "3rem", 
        color,
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
    }

    const column = () => {
      return [...Array(numberOfRows).fill("•")].map((item, i) => (
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
          className="grid-points"
        >
          {
            Array(numberOfColumns).fill(0).map((item, i) => <div key={i}>{column()}</div>)
          }
        </div>
    )
}
