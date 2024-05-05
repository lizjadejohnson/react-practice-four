import React from 'react'

const SubmittedCity = ({ city }) => {
    return (
        <div>
            <h1>Thank you for submitting your city!</h1>
            <p>You have submitted: {city}</p>
        </div>
        );
    }
    
export default SubmittedCity;
