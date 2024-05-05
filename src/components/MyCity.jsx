import React from 'react'

const MyCity = ({ myCity, setMyCity }) => {

    // Handle changes to the input
    const handleCityChange = (event) => {
        setMyCity(event.target.value); // Update MyCity state based on form input below
    };

    // Handle form submission
    const handleCitySubmit = (event) => {
        event.preventDefault(); // Prevent default form behavior
        console.log("City Submitted: ", myCity); // You can handle the submission here
    };

    return (
        <div className='myCityContainer'>
            {/* A form that, when submitted, will execute handleCitySubmit. */}
            <form onSubmit={handleCitySubmit}>
                <label for="cityname">My City:</label>
                {/* input field's value set to myCity and onChange handler set to handleCityChange. */}
                <input type="text" id="cityname" name="cityname" value={myCity} onChange={handleCityChange}/>
                {/* Submit button to submit the form, thanks to onSubmit using handleCitySubmit we prevent default form behavior*/}
                <input type="submit" value="Submit" />
            </form>
            <h1>{myCity}</h1>
        </div>
    )
}

export default MyCity;
