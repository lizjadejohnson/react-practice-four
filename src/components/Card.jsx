import React from 'react'

const Card = ({currentImg}) => {
  return (
    <div className='cardContainer'>
        {/* Display the current image that was passed in: */}
      <img src={currentImg} alt="" className="aPic" />
    </div>
  )
}

export default Card
